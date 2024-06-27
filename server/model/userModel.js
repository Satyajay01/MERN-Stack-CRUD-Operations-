import mongoose, { Types } from 'mongoose';



const userSchema = new mongoose.Schema({
    fname:{
        Type:String,
        required: true
    },
    lname:{
        Type:String,
        required: true
    },
    email:{
        Type:String,
        required: true
    },
    password:{
        Type:String,
        required: true
    },
})


export default mongoose.model("User",userSchema);