const debug = require("debug")("index");
const express = require("express");
const app = express();

const port = process.env.SERVER_PORT || 5001;

const initializeserver = () => {
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server on ${port}`);
    });
    resolve();
    server.on("error", (error) => {
      debug("Error on server:", error.message);
      reject();
    });
  });
};

module.exports = initializeserver;
