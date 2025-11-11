require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db.js');
const todoRouter = require('./routes/todo-routes.js')
const app = express();

const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/api/v1/todo-app", todoRouter);

app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`);
})
