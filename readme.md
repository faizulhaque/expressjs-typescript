# ExpressJS Typescript

## Getting started

## SSL

Note:
1. Install https://command-not-found.com/openssl
2. Use sudo if needed.
3. When ask Common Name use localhost

```bash
mkdir -p ./ssl && cd ./ssl

openssl genrsa -out localhost.local.key 2048

openssl req -new -key localhost.local.key -out localhost.local.csr

openssl x509 -req -days 3650 -in localhost.local.csr -signkey localhost.local.key -out localhost.local.crt

cp localhost.local.key localhost.local.pem

```

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run start` to start the local server.


