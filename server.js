require('dotenv').config();
const express = require("express");
const connectDB = require("./database/db");
const cors = require('cors')
const routes = require("./routes");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/section",routes);

// Error handling middleware
app.use((err, req, res, next) => {
   res.status(500).json({ error: 'Internal Server Error' });
 });

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
   console.log(`server listening on ${PORT}`);
});