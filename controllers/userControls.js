const User= require('../models/UserModel');
const mongoose =require ('mongoose');

const createUser = async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const user = await User.create({username,email,password})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }   
}

module.exports= {createUser} //export createUser function