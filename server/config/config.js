require("dotenv").config();
module.exports = {

    // secret: "Ziad1937",
    // "database": {
    //   "url": "mongodb://localhost/DelieryFood",
    //   "dbName": "DelieryFood",
    //   "options": {
    //     "useNewUrlParser": true
    //   }
    // }
    DB: process.env.APP_DB,
    PORT: process.env.APP_PORT,
    SECRET : process.env.APP_SECRET,
    
  };