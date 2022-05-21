"use strict";

const db = require("../config/db");

class Board {
  constructor(body) {
    this.body = body;
  }
  async post() {
    const post = this.body;
    try {
      const query = "insert ";
    } catch {}
  }
}
