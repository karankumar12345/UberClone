const express=require("express");

const app=express();





app.get('/',(req,res)=>{
    res.send("Kya beta check kar raha ha chal raha ha re dekh ");

})



module.exports=app;