/**
 * Các kiểu dữ liệu liên quan đến người (seiyuu, đạo diễn, v.v.)
 */
import { Image } from "./common.js";

/**
 * Thông tin cơ bản về người
 */
export interface Person {
  mal_id: number;
  url: string;
  images: Image;
  name: string;
  given_name?: string;
  family_name?: string;
  alternate_names: string[];
  birthday?: string;
  favorites: number;
  about?: string;
}

/**
 * Thông tin đầy đủ về người
 */
export interface PersonFull extends Person {
  anime: {
    position: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  manga: {
    position: string;
    manga: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  voices: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
    character: {
      mal_id: number;
      url: string;
      images: Image;
      name: string;
    };
  }[];
}

/**
 * Tham số tìm kiếm người
 */
export interface PersonSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: "mal_id" | "name" | "birthday" | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
}
