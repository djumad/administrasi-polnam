import { Router } from "express";
import { UserService } from "../service/UserService.mjs";

const userController = Router();

const userService = new UserService();

userController.get("/api/v1/users" , async(req , res)=>{
    const user = await userService.getUser();
    res.status(200).json({
        data : user
    });
});

export default userController;