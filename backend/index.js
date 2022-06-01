const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const taskRoute = require("./routes/task");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to mongoDB successfully");
}).catch((err)=>{
    console.log(err);
})

const port = 5000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


// Routes
app.use("/api/task", taskRoute);
app.use("/api/auth", authRoute);


app.listen(port, ()=>{
    console.log(`Task Manager server running on http://localhost:${port}`);
})