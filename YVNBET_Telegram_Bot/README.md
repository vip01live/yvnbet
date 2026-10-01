# YVNBET Telegram Bot

HY/RU Telegram registration and staff approval bot.

Included:
- HY/RU localization
- Registration with password confirmation and 18+ confirmation
- Registration request IDs
- User profile and approved-user access
- Staff RBAC foundation
- Audit-log model
- Async SQLAlchemy database layer
- Environment configuration
- Alembic structure
- Tests

Intentionally excluded: deposits, withdrawals, cryptocurrency payments, balances, and gambling transaction processing.

Run:
1. Copy .env.example to .env
2. Set BOT_TOKEN and SUPER_ADMIN_ID
3. pip install -r requirements.txt
4. python main.py
