const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
// port heroku || port localhost
const port = process.env.PORT;

// app.use((req, res, next) => {
//   //if (req.method) {  <- essa parte não precisa
//   res.status(503).send("MAINTENANCE MODE");
// });

app.use(express.json()); // Isso aqui faz com que todo JSON recebido seja transformado em um objeto, como se fosse um JSON.parse

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
