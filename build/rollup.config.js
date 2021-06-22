const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const postcss = require("rollup-plugin-postcss");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const copy = require("rollup-plugin-copy");
const pkg = require("../package.json");

console.log(pkg);

const resolveFile = function(filePath) {
  return path.join(__dirname, "..", filePath);
};

const babelOptions = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

module.exports = [
  {
    input: resolveFile("src/main.js"),
    output: {
      file: resolveFile("docs/index.js"),
      format: "umd",
    },
    plugins: [
      copy({
        targets: [
          { src: resolveFile("public/**/*"), dest: resolveFile("docs") },
        ],
      }),
      postcss(),
      nodeResolve(),
      commonjs({
        exclude: "src/**",
      }),
      babel(babelOptions),
      replace({
        exclude: "node_modules/**",
        "process.env.NODE_ENV": JSON.stringify("production"),
        MY_PACKAGE_JSON_NAME: pkg.name,
        MY_PACKAGE_JSON_VERSION: pkg.version,
      }),
    ],
  },
];
