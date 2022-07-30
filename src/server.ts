import app from './app';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as path from 'path';

const HTTP_PORT = 4000;
const HTTPS_PORT = 4001;

console.log('directry', path.join(__dirname, '../ssl/localhost.local.key'));

let server = http.createServer(app);
var sslOptions = {
  key: fs.readFileSync(path.join(__dirname, '../ssl/localhost.local.key')),
  cert: fs.readFileSync(path.join(__dirname, '../ssl/localhost.local.crt'))
}
let secureServer = https.createServer(sslOptions, app)

server
  .listen(HTTP_PORT, () => {
    console.log(`server running on port : ${HTTP_PORT}`);
  })
  .on('error', (e) => console.error(e));
  secureServer
  .listen(HTTPS_PORT, () => {
    console.log(`secure server running on port : ${HTTPS_PORT}`);
  })
  .on('error', (e) => console.error(e));
