export interface Game {
  id: string;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publisher>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface Genre {
  name: string;
}

export interface Rating {
  id: number;
  count: number;
  title: string;
}

export interface Screenshots {
  image: string;
}

export interface Trailer {
  data: {
    max: string;
  }
}

export interface Publisher {
  name: string;
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
