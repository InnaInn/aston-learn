export type Album = {
  id: number;
  userId: number;
  title: string;
};

export type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};