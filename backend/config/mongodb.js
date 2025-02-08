import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/prescripto?authSource=admin`
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host} ${conn.connection.name}`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    console.log(`Error`, error);
    process.exit(1);
  }
};

export default connectDB;
