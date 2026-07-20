#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync } from "node:fs";

const standaloneDirectory = ".next/standalone";

if (!existsSync(standaloneDirectory)) {
  throw new Error(`Standalone output is missing: ${standaloneDirectory}`);
}

for (const [source, destination] of [
  ["public", `${standaloneDirectory}/public`],
  [".next/static", `${standaloneDirectory}/.next/static`],
]) {
  if (!existsSync(source)) {
    throw new Error(`Required build asset directory is missing: ${source}`);
  }

  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true });
}
