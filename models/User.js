import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  role: Number,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
