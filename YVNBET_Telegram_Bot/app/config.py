from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    bot_token: str
    database_url: str = "sqlite+aiosqlite:///./yvnbet_bot.db"
    super_admin_id: int | None = None
    website_url: str = "https://example.com"
    operator_url: str = "https://t.me/example"
    app_timezone: str = "Asia/Yerevan"
    registration_enabled: bool = True
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
