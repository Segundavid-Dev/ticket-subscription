import mongoose from "mongoose";
import config from "../config/index.js";

if (!config.DB_URI) {
  throw new Error("Missing database uri in env");
}

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);

    process.exit(1);
  }
};

export default connectDB;
