import React from 'react';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type RootStackParamList = {
  Post: { photo: Photo | undefined };
};

export type RenderPattern = {
  [key: string]: React.ReactElement | null;
};
