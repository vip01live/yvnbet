from aiogram.fsm.state import State, StatesGroup

class Registration(StatesGroup):
    name = State()
    phone = State()
    password = State()
    password_confirmation = State()
    age_confirmation = State()
    review = State()
