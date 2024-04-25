export interface Character {
    id: number;
    name: string;
    thumbnail: {
      path: string,
      extension: string
    };
    comics: {
      available: number
    };
    series: {
      available: number
    };
    stories: {
      available: number
    }
  }