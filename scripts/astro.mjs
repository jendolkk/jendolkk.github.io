import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

process.env.ASTRO_TELEMETRY_DISABLED ??= "1";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const astroBin = path.join(rootDir, "node_modules", "astro", "bin", "astro.mjs");
const args = process.argv.slice(2);
const child = spawn(process.execPath, [astroBin, ...args], {
  env: process.env,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
