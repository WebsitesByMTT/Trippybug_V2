export const searchImages = (item) => {
  let searchFor = item.replace(/-/g, "");
  searchFor = searchFor.replace(/\s+/g, "-");

  const images = {
    All: "/categories/all.png",
    Cars: "/categories/cars.png",
    Airlines: "/categories/airlines.png",
    "Looking-for-inspiration": "/categories/looking-for-inspiration.png",
    "Popular-Recommended-Hotels": "/categories/popular-recommended-hotels.png",
    "Explore-The-World": "/categories/explore-the-world.png",
    Trending: "/categories/trending.png",
  };

  for (let key in images) {
    if (key.includes(searchFor)) {
      return images[key];
    }
  }
  return images["All"];
};
