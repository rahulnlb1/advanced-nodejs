const server = require("http").createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello World");

  //   setTimeout(() => {
  //     res.write("other msg");
  //   }, 1000);

  //   setTimeout(() => {
  //     res.write("yet other msg");
  //   }, 2000);

  //   setTimeout(() => {
  //     res.end("yet other msg");
  //   }, 3000);
});

server.listen(8000);
