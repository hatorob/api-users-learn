## se instalo lo siguiente

npm install express cors dotenv
npm install -D typescript ts-node-dev @types/node @types/express
npm i --save-dev @types/cors


npm install prisma --save-dev
npm install @prisma/client

npx prisma init

## typescript

npx tsc --init


docker compose up -d

// crear modelo
npx prisma migrate dev --name init
npx prisma generate
