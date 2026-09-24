# Production checklist

- Configure PostgreSQL and run Prisma migration.
- Set a strong ADMIN_SESSION_SECRET and bcrypt ADMIN_PASSWORD_HASH; never commit secrets.
- Configure TOTP if required.
- Configure persistent S3-compatible media storage before enabling uploads.
- Confirm provider iframe permission and CSP/frame-ancestors with the provider; no bypass is implemented.
- Configure only real game launch URLs and licensed media.
- Confirm payment networks, fees, processing times and withdrawal rules.
- Replace preliminary legal copy with reviewed legal text and real controller identity.
- Confirm bonus calculation, wagering, limits, validity and restrictions before publishing.
- Configure production domain in sitemap/metadata.
- Run unit, integration, E2E, accessibility and production-build tests before release.
- Verify 320/375/768/1024/1440px and current major browsers.
