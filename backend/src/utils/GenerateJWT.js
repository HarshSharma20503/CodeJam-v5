import jwt from "jsonwebtoken";

const generateJWTToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { generateJWTToken };
