require('dotenv').config()
const express = require('express');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user');
const mongoose  = require('mongoose');

// db connection
const connectParams ={
  useNewUrlParser : true,
  useUnifiedTopology:true
}
mongoose.connect(process.env.MONGO_URL, connectParams).then(()=>{
  console.log("Connected DB")
}).catch((e) =>{
  console.log("Not connected", e)
})




server.use(express.json())
server.use("/products", productRouter.router)  
server.use("/users", userRouter.router) 

server.listen(process.env.PORT)

