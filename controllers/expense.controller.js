const express=require("express");
const router=express.Router();

const Expense=require("../models/expense");
const Category=require("../models/category");

//GET-New expense form
router.get("/new",async(req,res)=>{
try{
const categories=await Category.find({user:req.session.user._id});
res.render("expense/new.ejs",{categories});
}catch(error){
console.log(error);
res.redirect("/");
}
});

//POST-Create expense
router.post("/",async(req,res)=>{
try{
req.body.user=req.session.user._id;
await Expense.create(req.body);
res.redirect("/");
}catch(error){
console.log(error);
res.redirect("/expenses/new");
}
});

module.exports=router;