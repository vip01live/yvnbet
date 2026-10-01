from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup
from app.i18n import t

def register_keyboard(lang="hy"):
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text=t(lang,"register"),callback_data="register")]])

def age_keyboard(lang="hy"):
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="18+ ✓",callback_data="age_yes")],[InlineKeyboardButton(text=t(lang,"cancel"),callback_data="cancel")]])

def review_keyboard(lang="hy"):
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text=t(lang,"confirm"),callback_data="reg_confirm")],[InlineKeyboardButton(text=t(lang,"cancel"),callback_data="cancel")]])

def approved_keyboard(lang,website,operator):
    labels={"hy":("🎮 Սկսել խաղալ","👤 Իմ պրոֆիլը","📞 Կապ օպերատորի հետ"),"ru":("🎮 Начать играть","👤 Мой профиль","📞 Связаться с оператором")}[lang]
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text=labels[0],url=website)],[InlineKeyboardButton(text=labels[1],callback_data="profile")],[InlineKeyboardButton(text=labels[2],url=operator)]])
