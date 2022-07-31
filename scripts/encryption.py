
import sys
import base64

from cryptography.fernet import Fernet
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

def generateKey(data):
    encodedPassword = data.encode()
    salt = b'salt_'
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
        backend=default_backend()
    )
    return base64.urlsafe_b64encode(kdf.derive(encodedPassword))

def encryptString(stringData, generatedKey):
    fk = Fernet(generatedKey)
    return fk.encrypt(stringData.encode())

def decryptString(byteData, generatedKey):
    fk = Fernet(generatedKey)
    return fk.decrypt(byteData)

print(sys.argv[1])
print(sys.argv[2])
print(sys.argv[3])

if sys.argv[1] == "encrypt":
  print(encryptString(sys.argv[2], generateKey(sys.argv[3])))

if sys.argv[1] == "dencrypt":
  encrypted = sys.argv[2].encode()
  print(decryptString(encrypted, generateKey(sys.argv[3])).decode())