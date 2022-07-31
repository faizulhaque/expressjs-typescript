// const crypto = require("crypto");
// const str = 'password';
// const salt = "salt";
// const sha256Hasher = crypto.createHmac("sha256", salt);
// const hash = sha256Hasher.update(str).digest("hex");
// console.log(hash);

const path = require('path')
const {
  spawnSync
} = require("child_process");

const msg = "Hello world"
const password = "Woah amazing password"

const encryptionProcess = spawnSync('python3', [path.join(__dirname, "./scripts/encryption.py"), 'encrypt', msg, password], { encoding : 'utf8' });

let outArray = encryptionProcess.stdout.split('\n');
let encrypted = outArray[outArray.length -2].trim().replace(/'/g, '').substring(1);
console.log(`hash of '${msg}':`, encrypted);

const dencryptionProcess = spawnSync('python3', [path.join(__dirname, "./scripts/encryption.py"), 'dencrypt', encrypted, password], { encoding : 'utf8' });

outArray = dencryptionProcess.stdout.split('\n');
let dencrypted = outArray[outArray.length -2].trim();
console.log(`plain of '${encrypted}':`, dencrypted);
