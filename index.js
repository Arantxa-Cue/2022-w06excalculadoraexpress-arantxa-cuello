require("dotenv").config();
const initializeserver = require("./server");
const port = process.env.SERVER_PORT || 5001;
const debug = require("debug")("index");
const express = require("express");

const app = express();

(async () => {
  try {
    await initializeserver(port);
  } catch (error) {
    debug(error);
  }
})();
