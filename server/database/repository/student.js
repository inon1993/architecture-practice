const { Student } = require("../models");

const signup = async (student) => {
  const newStudent = new Student(student);
  try {
    await newStudent.save();
    return newStudent;
  } catch (error) {
    throw new Error(error);
  }
};

const getStudent = async (name) => {
  try {
    const student = await Student.find({ name: name });
    return student;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.signup = signup;
module.exports.getStudent = getStudent;
