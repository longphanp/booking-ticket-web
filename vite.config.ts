import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

function getDirectories(path: string) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: getDirectories("./src").reduce(
      (alias, dir) => ({
        ...alias,
        [dir]: path.resolve(process.cwd(), `src/${dir}`),
      }),
      {},
    ),
  },
});
