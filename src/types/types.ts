export type Episode = {
  id: string;
  title: string;
  members: string;
  description: string;
  published_at: string;
  thumbnail: string;
  file: {
    duration: number;
    durationAsString: string;
    url: string;
  };
};
