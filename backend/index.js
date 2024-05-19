const express = require('express');
const { connectMongoDb } = require("./connection");
const path = require("path");
const { logReqRes } = require("./middleware");
const userRouter = require('./routes/user');
const cors = require("cors");
const app = express();
const PORT = 8000;
const uri = "mongodb+srv://ernehashah822:neha123@cluster0.uhcmytd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connection
connectMongoDb(uri).then(() => {
  console.log("Connected to cluster 0 db");
}).catch((e)=>
{
  console.log(e);
});

//Middleware
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(logReqRes("log.txt"));

app.use(express.urlencoded({extended:false}));
// Allow requests from a specific origin
const allowedOrigins = ['http://localhost:3000', 'http://example2.com'];
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is allowed or if it's a browser preflight request
    if (!origin || allowedOrigins.includes(origin) || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

//Routes
app.use("/api", userRouter);

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));