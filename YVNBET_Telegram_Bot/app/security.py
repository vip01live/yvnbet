import hashlib
import secrets

def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.scrypt(password.encode(), salt=bytes.fromhex(salt), n=16384, r=8, p=1)
    return "scrypt$" + salt + "$" + digest.hex()

def verify_password(password: str, encoded: str) -> bool:
    try:
        _, salt, digest = encoded.split("$", 2)
        check = hashlib.scrypt(password.encode(), salt=bytes.fromhex(salt), n=16384, r=8, p=1)
        return secrets.compare_digest(check.hex(), digest)
    except ValueError:
        return False
