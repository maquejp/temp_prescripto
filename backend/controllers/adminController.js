import validator from "validator";
import bcrypt from "bcrypt";
import cloudinary from "cloudinary";
import doctorModel from "../models/doctorModel.js";

// API FOR ADDING DOCTORS
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file

    console.log({
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    }, imageFile);

    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.status(400).json({ success: false, message: "all fields are required" });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // validate password
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be atleast 8 characters" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.v2.uploader.upload(imageFile.path, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url;

    // add doctor to database
    const doc = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      creation_date: Date.now(),
      available: true,
    };

    console.log(doc);

    const newDoc = new doctorModel(doc);
    await newDoc.save();

    return res.status(200).json({ success: true, message: "Doc added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addDoctor };
