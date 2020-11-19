const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, Page, User } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

const init = async () => {
  await db.sync();

  //await db.sync({force: true});

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

}


init();