const net = require("net");
// const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: "172.17.192.24",
    port: 50541,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server returns: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AR");
  });



  return conn;
};

module.exports = { connect };