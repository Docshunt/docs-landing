#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const files = execFileSync("git", ["ls-files", "-co", "--exclude-standard", "-z"], {
  encoding: "utf8",
})
  .split("\0")
  .filter(Boolean)
  .filter((file) => !file.startsWith("node_modules/"))
  .filter((file) => !file.startsWith(".next/"))
  .filter((file) => !file.startsWith("test-results/"))
  .filter((file) => !file.endsWith(".tsbuildinfo"))
  .filter((file) => !/\.(png|jpe?g|webp|gif|ico|avif)$/i.test(file));

const blockedPathPatterns = [/^\.env(?:\.|$)/, /^\.vercel\//, /(^|\/)id_rsa$/, /(^|\/)id_ed25519$/, /\.(pem|key|p12|pfx)$/i];

const contentPatterns = [
  {
    name: "private key block",
    regex: /-----BEGIN (?:RSA |DSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/,
  },
  {
    name: "GitHub token",
    regex: /\bgh[pousr]_[A-Za-z0-9_]{36,}\b/,
  },
  {
    name: "OpenAI API key",
    regex: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/,
  },
  {
    name: "AWS access key id",
    regex: /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
  },
  {
    name: "Google API key",
    regex: /\bAIza[0-9A-Za-z_-]{35}\b/,
  },
  {
    name: "credentialed URL",
    regex: /[a-z][a-z0-9+.-]*:\/\/[^/\s:@]+:[^/\s:@]+@/i,
  },
  {
    name: "database URL assignment",
    regex: /\b(?:DATABASE_URL|DB_URL|POSTGRES_URL|MYSQL_URL)\s*=\s*["']?[a-z][a-z0-9+.-]*:\/\//i,
  },
];

const findings = [];

for (const file of files) {
  if (blockedPathPatterns.some((pattern) => pattern.test(file))) {
    findings.push(`${file}: blocked secret-bearing path`);
    continue;
  }

  let content;
  try {
    content = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const pattern of contentPatterns) {
    if (pattern.regex.test(content)) {
      findings.push(`${file}: matches ${pattern.name}`);
    }
  }
}

if (findings.length > 0) {
  console.error("Sensitive-info scan failed:");
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log(`Sensitive-info scan passed (${files.length} files checked).`);
