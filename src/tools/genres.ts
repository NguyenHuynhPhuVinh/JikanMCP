/**
 * Các công cụ MCP liên quan đến thể loại
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import { Genre } from "../types/common.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy danh sách thể loại anime
 * @param filter Lọc theo loại (genres, explicit_genres, themes, demographics)
 * @returns Danh sách thể loại anime
 */
export async function getAnimeGenres(
  filter?: "genres" | "explicit_genres" | "themes" | "demographics"
): Promise<{ data: Genre[] }> {
  const response = await jikanAPI.request<{ data: Genre[] }>(
    ENDPOINTS.GENRES_ANIME,
    { filter }
  );
  return response;
}

/**
 * Lấy danh sách thể loại manga
 * @param filter Lọc theo loại (genres, explicit_genres, themes, demographics)
 * @returns Danh sách thể loại manga
 */
export async function getMangaGenres(
  filter?: "genres" | "explicit_genres" | "themes" | "demographics"
): Promise<{ data: Genre[] }> {
  const response = await jikanAPI.request<{ data: Genre[] }>(
    ENDPOINTS.GENRES_MANGA,
    { filter }
  );
  return response;
}
