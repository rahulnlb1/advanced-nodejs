const server = require("net").createServer();

let counter = 0;
let sockets = {};

function getTimestamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

server.on("connection", socket => {
  socket.id = counter++;

  console.log("Client connected");
  socket.write("Please enter your name: ");

  socket.on("data", data => {
    if (!sockets[socket.id]) {
      socket.name = data.trim();
      socket.write(`Welcome ${socket.name}!!!`);
      sockets[socket.id] = socket;
      return;
    }
    Object.entries(sockets).forEach(([key, cs]) => {
      if (socket.id == key) return;
      cs.write(`${socket.name}: `);
      cs.write(data);
    });
    console.log(`data is : ${data}`);
  });

  socket.on("end", () => {
    delete sockets[socket.id];
    console.log("Client disconnected");
  });

  socket.on("error", () => {
    delete sockets[socket.id];
    console.log("Client disconnected");
  });
});

server.listen(8000, () => console.log("Server bound"));
