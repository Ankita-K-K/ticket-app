import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    mongoose.Promise = global.Promise;
    console.log("Database connected successfully");
  } catch {
    console.log("Dtabase connection error");
  }
};
export default connectDB;
