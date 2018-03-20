// default environment
process.env.NODE_ENV = process.env.NODE_ENV || "default";

const {buildHTML, clearWebpackOutputDir, bundleWebpackClient} = require('../lib/bundler');
const {checkVersions} = require('../lib/system');

// run our Promises sequentially
module.exports = checkVersions()
  .then(clearWebpackOutputDir)
  .then(bundleWebpackClient)
  .then(() => buildHTML(["index", "react-animated-css", "react-animated-css-onscroll"]));
