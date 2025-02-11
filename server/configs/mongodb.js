import mongoose from "mongoose";

async function connectDB() {

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/CleanCut`);
}
export default connectDB;
