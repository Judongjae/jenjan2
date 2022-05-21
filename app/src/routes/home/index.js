"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/posts", ctrl.output.posts); //게시글다보기

router.post("/post", ctrl.process.post); //게시글작성

module.exports = router;
