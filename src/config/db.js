import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    //const conn = await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect("mongodb+srv://liugeyang:gerry@myclusterprovider.mhfbhk0.mongodb.net/users?retryWrites=true&w=majority&appName=myClusterProvider");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error1: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;