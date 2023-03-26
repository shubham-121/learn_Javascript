const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))       //create a directory public/css/styles.jss for using css on website 
app.set("view engine", "ejs");
app.use(express.static("public"));



//using external modules to export date code
const date=require(__dirname+ "/date.js")
//console.log(date());      //activating external date module here

var items=["Get Food","Cook Food","Eat food"]  // global variable


app.get("/",(req,res)=>{

   // let day=date();  //activating the external  date module here

   let day=date.getDate();     
   // let day=date.getDay();   //can also use getDay()
    res.render("list", { kindOfDay: day , newItems: items  })
})

app.post('/',(req,res)=>{
    var item=req.body.newItem;

    items.push(item);
    console.log(item);

    res.redirect("/");
})


app.listen(3000,()=>{
    console.log("server started at port 3000")
})