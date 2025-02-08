import cloudinary from "cloudinary";

const connectCloudinary = async () => {
  try {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    console.log("cloudinary connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectCloudinary;
