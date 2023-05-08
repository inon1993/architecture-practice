const { studentRepository } = require("../database/repository");

const signup = async (student) => {
  try {
    const newStudent = await studentRepository.signup(student);
    return newStudent;
  } catch (error) {
    throw new Error(error);
  }
};

const getStudent = async (name) => {
  try {
    const newStudent = await studentRepository.getStudent(name);
    return newStudent;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.signup = signup;
module.exports.getStudent = getStudent;
