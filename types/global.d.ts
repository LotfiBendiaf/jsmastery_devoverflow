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

type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
};

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;
