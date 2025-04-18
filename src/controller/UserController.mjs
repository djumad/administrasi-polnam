import { Router } from "express";
import User from "../model/User.mjs";

const userController = Router();

userController.get("/api/v1/users" , async(req , res)=>{
    const user = await User.findAll();
    res.status(200).json({
        data : user
    });
});

export default userController;