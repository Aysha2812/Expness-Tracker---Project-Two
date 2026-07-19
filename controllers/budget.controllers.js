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

const newBudget=await Budget.create(req.body);

res.redirect(`/budgets/${newBudget._id}`);

}catch(error){
console.log(error);
res.redirect("/budgets/new");
}
});

//GET-Show one budget
router.get("/:id",async(req,res)=>{
try{
const budget=await Budget.findById(req.params.id).populate("category");

res.render("budget/show.ejs",{budget});

}catch(error){
console.log(error);
res.redirect("/");
}
});

//GET-Show all budgets
router.get("/",async(req,res)=>{
try{
const budgets=await Budget.find({user:req.session.user._id}).populate("category");

res.render("budget/index.ejs",{budgets});

}catch(error){
console.log(error);
res.redirect("/");
}
});

module.exports=router;