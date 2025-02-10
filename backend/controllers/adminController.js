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

    res.status(200).json("savedDoctor");
  } catch (error) {
    console.log(error);
  }
};

export { addDoctor };
