import { model, models, ObjectId, Schema } from "mongoose";

interface IAccount {
  userId: ObjectId; // Reference to the User model
  name: string;
  image?: string;
  password?: string; // Optional field
  provider: string; // Optional field
  providerAccountId: string; // Optional field
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
