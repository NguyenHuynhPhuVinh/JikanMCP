/**
 * Các công cụ MCP liên quan đến manga
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import {
  Manga,
  MangaFull,
  MangaCharacter,
  MangaSearchParams,
} from "../types/manga.js";
import { JikanResponse } from "../types/common.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy thông tin về một manga cụ thể
 * @param id ID của manga
 * @returns Thông tin manga
 */
export async function getManga(id: number): Promise<Manga> {
  const response = await jikanAPI.request<JikanResponse<Manga>>(
    ENDPOINTS.MANGA_BY_ID,
    { id }
  );
  return response.data;
}

/**
 * Lấy thông tin đầy đủ về một manga cụ thể
 * @param id ID của manga
 * @returns Thông tin đầy đủ về manga
 */
export async function getMangaFull(id: number): Promise<MangaFull> {
  const response = await jikanAPI.request<JikanResponse<MangaFull>>(
    ENDPOINTS.MANGA_FULL,
    { id }
  );
  return response.data;
}

/**
 * Lấy danh sách nhân vật trong manga
 * @param id ID của manga
 * @returns Danh sách nhân vật
 */
export async function getMangaCharacters(
  id: number
): Promise<MangaCharacter[]> {
  const response = await jikanAPI.request<JikanResponse<MangaCharacter[]>>(
    ENDPOINTS.MANGA_CHARACTERS,
    { id }
  );
  return response.data;
}

/**
 * Tìm kiếm manga
 * @param params Tham số tìm kiếm
 * @returns Kết quả tìm kiếm
 */
export async function searchManga(
  params: MangaSearchParams
): Promise<{ data: Manga[]; pagination: any }> {
  const response = await jikanAPI.request<{ data: Manga[]; pagination: any }>(
    ENDPOINTS.MANGA,
    params
  );
  return response;
}

/**
 * Lấy tin tức về manga
 * @param id ID của manga
 * @param page Số trang
 * @returns Tin tức về manga
 */
export async function getMangaNews(id: number, page: number = 1): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.MANGA_NEWS, {
    id,
    page,
  });
  return response;
}

/**
 * Lấy thống kê về manga
 * @param id ID của manga
 * @returns Thống kê về manga
 */
export async function getMangaStatistics(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.MANGA_STATISTICS, {
    id,
  });
  return response;
}

/**
 * Lấy đề xuất manga liên quan
 * @param id ID của manga
 * @returns Đề xuất manga liên quan
 */
export async function getMangaRecommendations(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(
    ENDPOINTS.MANGA_RECOMMENDATIONS,
    { id }
  );
  return response;
}

/**
 * Lấy thông tin về một manga ngẫu nhiên
 * @returns Thông tin manga ngẫu nhiên
 */
export async function getRandomManga(): Promise<Manga> {
  const response = await jikanAPI.request<JikanResponse<Manga>>(ENDPOINTS.RANDOM_MANGA);
  return response.data;
}
