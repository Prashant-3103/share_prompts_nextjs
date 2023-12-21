import mongoose from "mongoose";
let isConnected = false
export const connectToDB = async()=>{
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log("mongodb is already connected");
        return;
    }
    try {
       await mongoose.connect(process.env.MONGODB_URI,{
        dbName: "shared prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
       })
       isConnected= true
    } catch (error) {
console.log(error);
    }
}
