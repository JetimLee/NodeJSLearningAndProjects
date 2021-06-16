const express = require("express");
const app = express();
const path = require("path");

const routers = require("./routes/routes");
const userRouter = require("./routes/users");
app.use(express.static(path.join(__dirname, "public")));
app.use(routers);
app.use(userRouter);

app.listen(4100, () => {
  console.log(`server listening on port 4100`);
});
