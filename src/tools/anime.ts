/**
 * Các công cụ MCP liên quan đến anime
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import {
  Anime,
  AnimeFull,
  AnimeCharacter,
  AnimeEpisode,
  AnimeSearchParams,
} from "../types/anime.js";
import { JikanResponse } from "../types/common.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy thông tin về một anime cụ thể
 * @param id ID của anime
 * @returns Thông tin anime
 */
export async function getAnime(id: number): Promise<Anime> {
  const response = await jikanAPI.request<JikanResponse<Anime>>(
    ENDPOINTS.ANIME_BY_ID,
    { id }
  );
  return response.data;
}

/**
 * Lấy thông tin đầy đủ về một anime cụ thể
 * @param id ID của anime
 * @returns Thông tin đầy đủ về anime
 */
export async function getAnimeFull(id: number): Promise<AnimeFull> {
  const response = await jikanAPI.request<JikanResponse<AnimeFull>>(
    ENDPOINTS.ANIME_FULL,
    { id }
  );
  return response.data;
}

/**
 * Lấy danh sách nhân vật trong anime
 * @param id ID của anime
 * @returns Danh sách nhân vật
 */
export async function getAnimeCharacters(
  id: number
): Promise<AnimeCharacter[]> {
  const response = await jikanAPI.request<JikanResponse<AnimeCharacter[]>>(
    ENDPOINTS.ANIME_CHARACTERS,
    { id }
  );
  return response.data;
}

/**
 * Lấy danh sách tập của anime
 * @param id ID của anime
 * @param page Số trang
 * @returns Danh sách tập
 */
export async function getAnimeEpisodes(
  id: number,
  page: number = 1
): Promise<{ data: AnimeEpisode[]; pagination: any }> {
  const response = await jikanAPI.request<{
    data: AnimeEpisode[];
    pagination: any;
  }>(ENDPOINTS.ANIME_EPISODES, { id, page });
  return response;
}

/**
 * Lấy thông tin về một tập cụ thể của anime
 * @param id ID của anime
 * @param episode Số tập
 * @returns Thông tin tập
 */
export async function getAnimeEpisode(
  id: number,
  episode: number
): Promise<AnimeEpisode> {
  const response = await jikanAPI.request<JikanResponse<AnimeEpisode>>(
    ENDPOINTS.ANIME_EPISODE,
    { id, episode }
  );
  return response.data;
}

/**
 * Tìm kiếm anime
 * @param params Tham số tìm kiếm
 * @returns Kết quả tìm kiếm
 */
export async function searchAnime(
  params: AnimeSearchParams
): Promise<{ data: Anime[]; pagination: any }> {
  const response = await jikanAPI.request<{ data: Anime[]; pagination: any }>(
    ENDPOINTS.ANIME,
    params
  );
  return response;
}

/**
 * Lấy tin tức về anime
 * @param id ID của anime
 * @param page Số trang
 * @returns Tin tức về anime
 */
export async function getAnimeNews(id: number, page: number = 1): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.ANIME_NEWS, {
    id,
    page,
  });
  return response;
}

/**
 * Lấy video liên quan đến anime
 * @param id ID của anime
 * @returns Video liên quan đến anime
 */
export async function getAnimeVideos(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.ANIME_VIDEOS, { id });
  return response;
}

/**
 * Lấy thống kê về anime
 * @param id ID của anime
 * @returns Thống kê về anime
 */
export async function getAnimeStatistics(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.ANIME_STATISTICS, {
    id,
  });
  return response;
}

/**
 * Lấy đề xuất anime liên quan
 * @param id ID của anime
 * @returns Đề xuất anime liên quan
 */
export async function getAnimeRecommendations(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(
    ENDPOINTS.ANIME_RECOMMENDATIONS,
    { id }
  );
  return response;
}

/**
 * Lấy thông tin về một anime ngẫu nhiên
 * @returns Thông tin anime ngẫu nhiên
 */
export async function getRandomAnime(): Promise<Anime> {
  const response = await jikanAPI.request<JikanResponse<Anime>>(ENDPOINTS.RANDOM_ANIME);
  return response.data;
}
