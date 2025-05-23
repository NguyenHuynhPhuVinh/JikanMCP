/**
 * Các công cụ MCP liên quan đến tìm kiếm
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import { searchAnime } from "./anime.js";
import { searchManga } from "./manga.js";
import { searchCharacters } from "./characters.js";
import { searchPeople } from "./people.js";
import { AnimeSearchParams } from "../types/anime.js";
import { MangaSearchParams } from "../types/manga.js";
import { CharacterSearchParams } from "../types/character.js";
import { PersonSearchParams } from "../types/person.js";

/**
 * Tìm kiếm tổng hợp (anime, manga, nhân vật, người)
 * @param query Từ khóa tìm kiếm
 * @param type Loại tìm kiếm
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @returns Kết quả tìm kiếm
 */
export async function search(
  query: string,
  type: "anime" | "manga" | "character" | "person",
  page: number = 1,
  limit: number = 25
): Promise<any> {
  switch (type) {
    case "anime":
      return searchAnime({ q: query, page, limit } as AnimeSearchParams);
    case "manga":
      return searchManga({ q: query, page, limit } as MangaSearchParams);
    case "character":
      return searchCharacters({
        q: query,
        page,
        limit,
      } as CharacterSearchParams);
    case "person":
      return searchPeople({ q: query, page, limit } as PersonSearchParams);
    default:
      throw new Error(`Không hỗ trợ loại tìm kiếm: ${type}`);
  }
}
