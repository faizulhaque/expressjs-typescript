const crypto = require("crypto");
const str = 'password';
const salt = "salt";
const sha256Hasher = crypto.createHmac("sha256", salt);
const hash = sha256Hasher.update(str).digest("hex");
console.log(hash);

