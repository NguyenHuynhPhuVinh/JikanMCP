/**
 * Các kiểu dữ liệu liên quan đến anime
 */
import { DateRange, Genre, Image } from "./common.js";

/**
 * Thông tin cơ bản về anime
 */
export interface Anime {
  mal_id: number;
  url: string;
  images: Image;
  trailer: {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
    images?: {
      image_url?: string;
      small_image_url?: string;
      medium_image_url?: string;
      large_image_url?: string;
      maximum_image_url?: string;
    };
  };
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
  source?: string;
  episodes?: number;
  status?: string;
  airing: boolean;
  aired: DateRange;
  duration?: string;
  rating?: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: string;
  season?: string;
  year?: number;
  broadcast?: {
    day?: string;
    time?: string;
    timezone?: string;
    string?: string;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
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
 * Thông tin đầy đủ về anime
 */
export interface AnimeFull extends Anime {
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
  streaming: {
    name: string;
    url: string;
  }[];
}

/**
 * Thông tin về nhân vật trong anime
 */
export interface AnimeCharacter {
  character: {
    mal_id: number;
    url: string;
    images: Image;
    name: string;
  };
  role: string;
  favorites: number;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: Image;
      name: string;
    };
    language: string;
  }[];
}

/**
 * Thông tin về tập anime
 */
export interface AnimeEpisode {
  mal_id: number;
  url?: string;
  title: string;
  title_japanese?: string;
  title_romanji?: string;
  duration?: number;
  aired?: string;
  filler?: boolean;
  recap?: boolean;
  forum_url?: string;
}

/**
 * Tham số tìm kiếm anime
 */
export interface AnimeSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  type?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "airing" | "complete" | "upcoming";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?:
    | "mal_id"
    | "title"
    | "type"
    | "rating"
    | "start_date"
    | "end_date"
    | "episodes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
  producers?: string;
}
