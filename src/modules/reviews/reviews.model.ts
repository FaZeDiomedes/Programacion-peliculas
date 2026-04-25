export interface Review {
  userId: string;
  movieId: string;
  comment: string;
  rating: number; // 1 a 5
  createdAt: Date;
}