import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is Required"] },
  email: { type: String, required: [true, "email is Required"] },
  password: { type: String, required: [true, "password is Required"] },
});

const User = new mongoose.model("User", UserSchema);
export default User;
