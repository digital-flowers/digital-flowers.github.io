// default environment
process.env.NODE_ENV = process.env.NODE_ENV || "default";

// start
require('./bundle').then(() => require("../index"));
