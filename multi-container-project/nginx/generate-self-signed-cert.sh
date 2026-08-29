#!/bin/sh
# Generates a self-signed TLS certificate for LOCAL HTTPS TESTING ONLY.
# In production, replace nginx/certs/ with a real certificate (e.g. from
# Certbot/Let's Encrypt — see Part 17, section 6 of the README).
set -e

CERT_DIR="$(dirname "$0")/certs"
mkdir -p "$CERT_DIR"

openssl req -x509 -nodes -days 365 \
  -newkey rsa:2048 \
  -keyout "$CERT_DIR/privkey.pem" \
  -out "$CERT_DIR/fullchain.pem" \
  -subj "/CN=localhost"

echo "Self-signed certificate written to $CERT_DIR/"
