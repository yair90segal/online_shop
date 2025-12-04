const Genres = {
  Fantasy: "Fantasy",
  SciFi: "Science Fiction",
  HisFic: "Historical Fiction",
  Romance: "Romance",
} as const;

type Genres = (typeof Genres)[keyof typeof Genres];

export { Genres };
