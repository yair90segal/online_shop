const Categories = {
    BestSellers: "Best Sellers",
    NewReleases: "New Releases",
    Fantasy: "Fantasy",
    SciFi: "Sci-Fi",
    NonFiction: "Non Fiction",
} as const;

type Categories = (typeof Categories)[keyof typeof Categories];

export { Categories };