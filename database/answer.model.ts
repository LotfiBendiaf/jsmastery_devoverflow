import { model, models, Types, Schema, Document } from "mongoose";

interface IAnswer {
  author: Types.ObjectId; // ObjectId as a string referencing the User model
  question: Types.ObjectId; // ObjectId as a string referencing the User model
  content: string;
  upVotes: number; // Default value is 0
  downVotes: number; // Default value is 0
}

export interface IAnswerDoc extends IAnswer, Document {}
const AnswerSchema = new Schema<IAnswer>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    content: { type: String, required: true },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
