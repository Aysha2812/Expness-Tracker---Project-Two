const express=require("express");
const router=express.Router();

const Budget=require("../models/budget");
const Category=require("../models/category");

//GET-New budget form
router.get("/new",async(req,res)=>{
try{
const categories=await Category.find({user:req.session.user._id});
res.render("budget/new.ejs",{categories});
}catch(error){
console.log(error);
res.redirect("/");
}
});

//POST-Create budget
router.post("/",async(req,res)=>{
try{
req.body.user=req.session.user._id;
await Budget.create(req.body);
res.redirect("/");
}catch(error){
console.log(error);
res.redirect("/budgets/new");
}
});

module.exports=router;