const express=require("express");
const userController=require("../controllers/user.controller")
const router=express.Router();
router.get("/",userController.getAllUsers);
//router.get("/",userController.getById);
router.delete("/:id",userController.deleteUser)
module.exports=router;