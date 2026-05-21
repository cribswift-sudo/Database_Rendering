const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const router = require("./Routes/todoRoutes");
const live_url = 
"mongodb://cribswift_emmanuel:cribswift1991@ac-gheatdk-shard-00-00.go7rxce.mongodb.net:27017,ac-gheatdk-shard-00-01.go7rxce.mongodb.net:27017,ac-gheatdk-shard-00-02.go7rxce.mongodb.net:27017/USSDPRIME?ssl=true&replicaSet=atlas-2brbin-shard-0&authSource=admin&appName=Cluster0";
mongoose.connect(live_url)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Connection Error: ", err));
app.use(cors());
app.use(express.json());
app.use("/todos", router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});