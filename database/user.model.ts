import { model, models, Schema } from "mongoose";

interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string; // Optional field
  image: string;
  location?: string; // Optional field
  portfolio?: string; // Optional field
  reputation: number; // Default value will be 0
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
