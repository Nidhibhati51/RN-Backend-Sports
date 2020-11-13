const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
//setting up express
const app = express();
app.use(express.json());
app.use(cors());
//starting up the server
const PORT = process.env.PORT || 5000; //grabbing the assigned port
app.listen(PORT,()=>console.log(`the server has started on port :${PORT}`));
//setting up the mongodb connection with mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}, (err)=>{
    if(err) throw err;
    console.log("Mongodb connection established")
});
//setup the routes

app.use("/users", require("./routes/userRouter"))
app.use("/todos", require("./routes/todoRouter"))

app.use("/AddTrainings", require("./routes/AddTrainingRouter"))