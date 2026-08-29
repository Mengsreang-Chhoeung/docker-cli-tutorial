import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import Redis from "ioredis";

@Injectable()
export class AppService implements OnModuleDestroy {
  private readonly pool: Pool;
  private readonly redis: Redis;

  constructor(private readonly config: ConfigService) {
    this.pool = new Pool({
      host: this.config.get("DB_HOST", "db"),
      port: Number(this.config.get("DB_PORT", "5432")),
      user: this.config.get("DB_USER", "postgres"),
      password: this.config.get("DB_PASSWORD", "postgres"),
      database: this.config.get("DB_NAME", "app_db"),
    });

    this.redis = new Redis({
      host: this.config.get("REDIS_HOST", "redis"),
      port: Number(this.config.get("REDIS_PORT", "6379")),
    });
  }

  getHealth() {
    return { status: "UP", timestamp: new Date().toISOString() };
  }

  async checkDb() {
    const result = await this.pool.query("SELECT NOW() AS now");
    return { connected: true, serverTime: result.rows[0].now };
  }

  async checkCache() {
    const key = "multi-container:last-visit";
    const previous = await this.redis.get(key);
    const now = new Date().toISOString();
    await this.redis.set(key, now);
    return { connected: true, previousVisit: previous, currentVisit: now };
  }

  async onModuleDestroy() {
    await this.pool.end();
    this.redis.disconnect();
  }
}
