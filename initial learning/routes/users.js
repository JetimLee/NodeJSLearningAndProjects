const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/userspage", (req, resp) => {
  resp.send("hello user");
});

module.exports = router;
