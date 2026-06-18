const path = require("path");
const fs = require("fs");

import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

// Get all icon files
const iconsDir = resolveFile("src/icons");
const iconFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".js"))
  .map((file) => `src/icons/${file}`);

// Add the main icons.js entry
const inputs = ["src/icons.js", ...iconFiles];

export default {
  input: inputs,
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
    exports: "named",
  },
  external: ["react"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    copy({
      targets: [
        { src: resolveFile("src/icons.d.ts"), dest: resolveFile("dist") },
        {
          src: resolveFile("dist/icons.js"),
          dest: resolveFile("dist"),
          rename: "index.js",
        },
      ],
      hook: "writeBundle",
    }),
  ],
};
