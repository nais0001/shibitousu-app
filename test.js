const { astro } = require("iztro");

const chart = astro.bySolar(
  "1961-05-01",
  12,
  "female"
);

console.log(JSON.stringify(chart, null, 2));