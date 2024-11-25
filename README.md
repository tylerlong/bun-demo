# Bun Demo

This is a demo project to try out [Bun](https://bun.sh/).

## Setup

```
bun add -d bun-types
```

Create `tsconfig.json` with the following content:

```json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

## To run some TS code

```
bun src/index.ts
```
