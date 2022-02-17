require("dotenv").config();
const initializeserver = require("./server");
const port = process.env.SERVER_PORT || 5001;
const debug = require("debug")("index");

(async () => {
  try {
    await initializeserver(port);
  } catch (error) {
    debug(error);
  }
})();
