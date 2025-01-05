import { model, models, Types, Schema, Document } from "mongoose";

interface IQuestion {
  author: Types.ObjectId; // ObjectId as a string referencing the User model
  title: string;
  content: string;
  tags: Types.ObjectId[]; // ObjectId as a string referencing the Tag model
  answers: number; // ObjectId as a string referencing the Answer model
  upVotes: number; // Default value is 0
  downVotes: number; // Default value is 0
  views: number; // Default value is 0
}
export interface IQuestionDoc extends IQuestion, Document {}
const QuestionSchema = new Schema<IQuestion>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
    answers: { type: Number, default: 0 },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
