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

const newExpense=await Expense.create(req.body);

res.redirect(`/expenses/${newExpense._id}`);

}catch(error){
console.log(error);
res.redirect("/expenses/new");
}
});

//GET-Show all expenses
router.get("/",async(req,res)=>{
try{
const expenses=await Expense.find({user:req.session.user._id}).populate("category");

res.render("expense/index.ejs",{expenses});

}catch(error){
console.log(error);
res.redirect("/");
}
});

//GET-Show one expense
router.get("/:id",async(req,res)=>{
try{
const expense=await Expense.findById(req.params.id).populate("category");

res.render("expense/show.ejs",{expense});

}catch(error){
console.log(error);
res.redirect("/");
}
});

module.exports=router;