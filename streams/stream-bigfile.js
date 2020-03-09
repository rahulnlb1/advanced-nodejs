const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream("./bigFile");
  src.pipe(res);
});
