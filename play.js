const  { connect } = require("./client");
const  { setupInput } = require("./input");

// establishes a connection with the game server

console.log("Connecting ...");
const conn = connect();

// Calls on to setupInput fn to activate the UI
setupInput(conn);
