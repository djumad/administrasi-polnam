import User from "../model/User.mjs";


export class UserService {
    async getUser(){
        const user = await User.findAll();
        return user;
    }
}