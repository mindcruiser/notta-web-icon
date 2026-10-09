const assert = require('assert');
const babel = require('@babel/core');
const processSvg = require('../bin/processSvg');

async function main() {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="sample" d="M0 0h1"/></defs><use xlink:href="#sample"/></svg>';
  const output = await processSvg(svg);

  assert.match(output, /<use xlinkHref="#[^"]+"/);
  assert.doesNotMatch(output, /xlink:href/);
  babel.transformSync(`const icon = <svg>${output}</svg>`, {
    presets: ['@babel/preset-react'],
  });
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
