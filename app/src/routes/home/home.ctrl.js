"use strict";

const db = require("../../config/db");

const output = {
  home: (req, res) => {
    res.send("home입니다");
  },
  posts: (req, res) => {
    db.query("select * from posts;", (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
};

const process = {
  post: (req, res) => {
    res.send(req.body);
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
