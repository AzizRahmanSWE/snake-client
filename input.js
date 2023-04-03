const {
  MOVE_UP_DATA,
  MOVE_DOWN_DATA,
  MOVE_LEFT_DATA,
  MOVE_RIGHT_DATA,
} = require("./constants");

// Stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin.
const handleUserInput = function(data) {
  if (data === "\u0003") {
    process.exit();
  }
  if (data === MOVE_UP_DATA) {
    connection.write("Move: up");
  } 
  if (data === MOVE_DOWN_DATA) {
    connection.write("Move: down");
  } 
  if (data === MOVE_LEFT_DATA) {
    connection.write("Move: left");
  } 
  if (data === MOVE_RIGHT_DATA) {
    connection.write("Move: right");
  } 
  if (data === "q") {
    connection.write("Say: Hi There!!!")
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => handleUserInput(data));

  return stdin;
};

module.exports = { setupInput };