export interface Game {
  bgImg: string;
  name: string;
  released: string;
  matecriticUrl: string;
  website: string;
  description: string;
  metacritic: number;
  genre: Array<Genre>
  parentPlatform: Array<ParentPlatform>;
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
    name: string;
  };
}
