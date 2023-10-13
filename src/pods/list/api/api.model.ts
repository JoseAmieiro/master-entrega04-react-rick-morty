interface Origin {
    name: string;
    url: string;
  }
  
  interface Location {
    name: string;
    url: string;
  }
  
   interface Results {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  interface Info{
    count: number;
    pages: number;
    next: string;
    prev: null;
  }
  
  export interface CharacterEntity {
    info: Info;
    results: Results;
  }