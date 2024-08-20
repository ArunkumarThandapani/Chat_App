const express = require("express");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const UserRoutes = require("./Routes/UserRoutes");
const { notfound, errorHandler } = require("./middleware/Errorhandler");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
+app.use("/api/user", UserRoutes);

app.listen("5000", function () {
  console.log(`server started listening on Port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("I am connected with the server");
});

app.get("/api/chat", (req, res) => {
  console.log(chats);
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});

app.use(notfound);
app.use(errorHandler);
