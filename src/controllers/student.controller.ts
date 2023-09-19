import Student from "@/models/student.models";

export const submit = async (req, res) => {
  const {training_center, medium,firstname, lastname,gender,DOB,fathername,mothername,email,address,nationality,mobile_number} = req.body;

  // if (!name || !phone || !password) {

  // }
  try {
    const student = await Student.create({
      training_center,
      medium,
      firstname,
      lastname,
      gender,
      DOB,
      fathername,
      mothername,
      email,
      address,
      nationality,
      mobile_number,
    });
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
};
