import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  getHealth() {
    return this.appService.getHealth();
  }

  @Get("db-check")
  checkDb() {
    return this.appService.checkDb();
  }

  @Get("cache-check")
  checkCache() {
    return this.appService.checkCache();
  }
}
