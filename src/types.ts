export type Image = {
  id: number;
  alt_description: string;
  urls: { small: string; regular: string; [key: string]: any };
  description: string;
  user: { username: string; [key: string]: any };
  [key: string]: any;
};

export type Images = Image[];
