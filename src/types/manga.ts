/**
 * Các kiểu dữ liệu liên quan đến manga
 */
import { DateRange, Genre, Image } from "./common.js";

/**
 * Thông tin cơ bản về manga
 */
export interface Manga {
  mal_id: number;
  url: string;
  images: Image;
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];
  type?: string;
  chapters?: number;
  volumes?: number;
  status?: string;
  publishing: boolean;
  published: DateRange;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: string;
  authors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  serializations: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
}

/**
 * Thông tin đầy đủ về manga
 */
export interface MangaFull extends Manga {
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
  external: {
    name: string;
    url: string;
  }[];
}

/**
 * Thông tin về nhân vật trong manga
 */
export interface MangaCharacter {
  character: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
  role: string;
  favorites: number;
}

/**
 * Tham số tìm kiếm manga
 */
export interface MangaSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  type?:
    | "manga"
    | "novel"
    | "lightnovel"
    | "oneshot"
    | "doujin"
    | "manhwa"
    | "manhua";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?:
    | "mal_id"
    | "title"
    | "start_date"
    | "end_date"
    | "chapters"
    | "volumes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
  magazines?: string;
}
