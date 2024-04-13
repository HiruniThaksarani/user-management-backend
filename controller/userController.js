const User=require('../models/userModel');
const mongoose=require('mongoose');

const getUsers=async (req,res) =>{
    const users=await User.find().sort({createdAt:-1}); // Find all users and sort them by creation date in descending order
    res.status(200).json(users); // Return the list of users
}

const getUserById=async (req,res) =>{
    const id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){  // Check if the user ID is a valid MongoDB Object
        return res.status(400).json({message:"Invalid user id"});
    }

    const user=await User.findById(id); // Find the user by ID

    if(!user){ //Check if the user exists
        res.status(404).json({message:"User not found"}); // Return a 404 Not Found response
    }

    res.status(200).json(user); //Return the user details
}

const createUser=async(req,res)=>{
    const {name,age,email,mobile}=req.body; // Get the user details from the request body

    try{
        const user=await User.create({name,age,email,mobile}); //Create a new user
        res.status(201).json(user); //Return the newly created user
    }catch(err){
        res.status(400).json({message:err.message}) // Return a 400 Bad request response with the error message
    }
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){  // Check if the user ID is a valid MongoDB Object
        return res.status(400).json({message:"Invalid user id"});
    }

    const user=await User.findByIdAndDelete(id); // Find the user and delete

    if(!user){ //Check if the user exists
        res.status(404).json({message:"User not found"}); // Return a 404 Not Found response
    }

    res.status(200).json(user); //Return the user details
}

const updateUser=async(req,res)=>{
    const id=req.params.id;
    
    if(!mongoose.Types.ObjectId.isValid(id)){  // Check if the user ID is a valid MongoDB Object
        return res.status(400).json({message:"Invalid user id"});
    }

    const user=await User.findOneAndUpdate({_id:id},{
        ...req.body
    }); // Find the user and update

    if(!user){ //Check if the user exists
        res.status(404).json({message:"User not found"}); // Return a 404 Not Found response
    }

    res.status(200).json(user); //Return the user details

}