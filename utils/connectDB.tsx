import mongoose, { Connection } from "mongoose";

async function connectDB() {
    if (mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery", false);
    // ! means i know the mongo url always exist in env file
    await mongoose.connect(process.env.MONGO_URL!)
    console.log("Conected to DB")
}
export default connectDB