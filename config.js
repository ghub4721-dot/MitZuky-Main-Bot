const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "",
  MONGODB: process.env.MONGODB || "mongodb+srv://sykoboza_db_user:2HMukk1s0yBvHnvT@cluster0.qxdtdec.mongodb.net/",
  OWNER_NUM: process.env.OWNER_NUM || "94721931393",
};
