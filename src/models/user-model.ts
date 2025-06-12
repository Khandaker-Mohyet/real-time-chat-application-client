import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    clerkUserId: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    imageUrl: {
        type: String
    },
    bio: {
        type: String
    }
}, { timestamps: true });


if(mongoose.models && mongoose.models["User"]){
    mongoose.deleteModel("User")
}


export const User = mongoose.model("User", userSchema)