interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string; // The unique identifier of the question
  title: string; // The title of the question
  tags: Tag[]; // Array of tags associated with the question
  author: Author; // Author's name or ID
  createdAt: Date; // Date when the question was created
  upVotes: number; // Number of upvotes the question has received
  answers: number; // Number of answers to the question
  views: number; // Number of times the question has been viewed
}
