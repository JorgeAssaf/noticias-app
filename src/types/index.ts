
// export interface Noticia {
//   source: Source;
//   author: string;
//   title: string;
//   description: null;
//   url: string;
//   urlToImage: null;
//   publishedAt: Date;
//   content: null;
// }

// export interface Source {
//   id: ID;
//   name: Name;
// }

// export enum ID {
//   GoogleNews = "google-news",
// }

// export enum Name {
//   GoogleNews = "Google News",
// }


export interface Noticia {
  status: string;
  totalResults: number;
  results: Noticia[];
  nextPage: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: null;
  description: string;
  content: null | string;
  pubDate: Date;
  image_url: string;
  source_id: SourceID;
  category: Category[];
  country: Country[];
  language: Language;
}

export enum Category {
  Health = "health",
}

export enum Country {
  Mexico = "mexico",
}

export enum Language {
  Spanish = "spanish",
}

export enum SourceID {
  Diariocordoba = "diariocordoba",
  Diariofarma = "diariofarma",
  Redaccionmedica = "redaccionmedica",
}
