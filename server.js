const express = require("express");
require('dotenv').config();
const cors = require('cors')
const routes = require("./routes");
const connectDB = require("./database/db");
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
// Routes
app.use("/section",routes)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
   console.log(`server listening on ${PORT}`);
});


