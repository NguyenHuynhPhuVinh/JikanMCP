/**
 * Các kiểu dữ liệu liên quan đến nhân vật
 */
import { Image } from "./common.js";

/**
 * Thông tin cơ bản về nhân vật
 */
export interface Character {
  mal_id: number;
  url: string;
  images: Image;
  name: string;
  name_kanji?: string;
  nicknames: string[];
  favorites: number;
  about?: string;
}

/**
 * Thông tin đầy đủ về nhân vật
 */
export interface CharacterFull extends Character {
  anime: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  manga: {
    role: string;
    manga: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  voices: {
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
 * Tham số tìm kiếm nhân vật
 */
export interface CharacterSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: "mal_id" | "name" | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
}
