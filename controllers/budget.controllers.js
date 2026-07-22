const express=require("express");
const router=express.Router();

const Budget=require("../models/Budget");
const Category=require("../models/Category");

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

//GET-Edit budget form
router.get("/:id/edit",async(req,res)=>{
try{
const budget=await Budget.findById(req.params.id);
res.render("budget/edit.ejs",{budget});
}catch(error){
console.log(error);
res.redirect("/budgets");
}
});

//PUT-Update budget
router.put("/:id",async(req,res)=>{
try{
await Budget.findByIdAndUpdate(req.params.id,req.body);
res.redirect(`/budgets/${req.params.id}`);
}catch(error){
console.log(error);
res.redirect("/budgets");
}
});

//DELETE-Delete budget
router.delete("/:id",async(req,res)=>{
try{
await Budget.findByIdAndDelete(req.params.id);
res.redirect("/budgets");
}catch(error){
console.log(error);
res.redirect("/budgets");
}
});

module.exports=router;