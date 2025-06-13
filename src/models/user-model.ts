import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,      
    unique: true
  },
  name: {
    type: String,
    required: true,      
  },
  email: {
    type: String,
    unique: true         
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: String
  },
  bio: {
    type: String
  }
}, { timestamps: true });


export const User = mongoose.models.User || mongoose.model("User", userSchema);
