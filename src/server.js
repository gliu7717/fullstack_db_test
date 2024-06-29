import express from 'express'
import bodyParser from 'body-parser'
import connectDB from './config/db.js';
import User from './models/userModel.js';
import mongoose from 'mongoose';
var ObjectId = mongoose.Types.ObjectId; 

connectDB();
let app = express();
app.use(bodyParser.json())

app.get('/api/user/:id', async (req,res)=>{
    console.log(req.params.id)
    //var id = '6662fb6b3be6fe6391b972f2';
    const user = await User.findById(req.params.id);
    console.log(user)
    if (user) {
        res.json({
        _id: user._id,
        name: user.name,
        age: user.age
        });
    } else {
        res.status(404);
        res.send('User not found');
    }   
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
app.post('/api/user', async (req,res)=>{
    const { name, age } = req.body;
    const user = await User.create({
      name,
      age
    });
    res.send(user)
  });
  

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})