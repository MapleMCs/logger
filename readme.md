## MapleLogger

Description : date with time color logger for Node.js.

Dependencies :
  - [Chalk@4.1.2](https://www.npmjs.com/package/chalk/v/4.1.2)

## Installation
```bash
  npm : npm install maple-log
  yarn : yarn add maple-log
  pnpm : pnpm add maple-log
```

## Exmaple
```js
let log = require("maple-log");

log.info("Hello world");
log.error(404, "Hello Maple");
log.warn("123");
log.hex("#f507f1", "123");
```