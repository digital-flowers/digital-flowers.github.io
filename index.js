const config = require("./lib/config");
const {createServer} = require("http-server");

createServer({
  root: config.getRoot(),
  autoIndex: true
}).listen(config.app.port);
