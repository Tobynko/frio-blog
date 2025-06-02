export interface postType {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export interface fetchQueryType {
  limit?: number;
  skip?: number;
}

export interface postPageType {
  params: Promise<{ id: string }>;
}
