import mongoose from "mongoose"

export const ConnectMongoDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("connected to Mongoose.....");
    } catch (error) {
        console.log(error)
    }
}