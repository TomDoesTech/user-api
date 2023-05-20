## Install dependencies

```bash
pnpm add argon2 drizzle-orm pg pino pino-pretty zennv zod jsonwebtoken fastify-zod fastify-guard fastify
```

## Install dev dependencies
```bash
pnpm add zod-to-json-schema @types/jsonwebtoken typescript tsx drizzle-kit @types/pg -D
```
## Initialize TypeScript
```bash
npx tsc --init
```

## Run migrations
```bash
pnpm run migrate
```

## Run the application
```bash
pnpm run dev
```