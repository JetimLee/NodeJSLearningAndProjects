const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/public/user.html");
});

module.exports = router;
