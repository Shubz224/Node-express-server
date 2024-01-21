const express = require("express");
const path = require("path");
const app =express();
const port = 1000;


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
});



app.listen(port,()=>{
    console.log(`server is working on port : ${port}`);
});