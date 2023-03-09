export interface Noticia {
  source: Source;
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: Date;
  content: null;
}

export interface Source {
  id: ID;
  name: Name;
}

export enum ID {
  GoogleNews = "google-news",
}

export enum Name {
  GoogleNews = "Google News",
}