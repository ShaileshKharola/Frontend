import mongoose from "mongoose";

const connectDB = async () => {
  // Validate environment variable
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  // Event listeners
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connection initiated...");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;