const  { connect } = require("./client");

// establishes a connection with the game server

console.log("Connecting ...");
connect;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === "w") {
    connect.write("Move: up");
  } else if (data === "s") {
    connect.write("Move: down ");
  } else if (data === "d") {
    connect.write("Move: right ");
  } else if (data === "a") {
    connect.write("Move: left ");
  } else if (data === "z") {
    connect.write("Say: Yikes");
  };
;}


// setup interface to handle user input from stdin.

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};
