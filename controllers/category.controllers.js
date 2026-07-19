const express=require("express");
const router=express.Router();

const Category=require("../models/category");

//GET-New category form
router.get("/new",(req,res)=>{
res.render("Category/new.ejs");
});

//POST-Create category
router.post("/",async(req,res)=>{
try{
req.body.user=req.session.user._id;

const newCategory=await Category.create(req.body);

res.redirect(`/categories/${newCategory._id}`);

}catch(error){
console.log(error);
res.redirect("/categories/new");
}
});

//GET-Show all categories
router.get("/",async(req,res)=>{
try{
const categories=await Category.find({user:req.session.user._id});

res.render("Category/index.ejs",{categories});

}catch(error){
console.log(error);
res.redirect("/");
}
});

//GET-Show one category
router.get("/:id",async(req,res)=>{
try{
const category=await Category.findById(req.params.id);

res.render("Category/show.ejs",{category});

}catch(error){
console.log(error);
res.redirect("/categories");
}
});

module.exports=router;