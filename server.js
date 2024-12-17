const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello hello Checking Mic...again hehe");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Welcome to Jurassic Park");
});
