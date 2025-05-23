/**
 * Các công cụ MCP liên quan đến mùa anime
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import { Anime } from "../types/anime.js";
import { JikanResponse } from "../types/common.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy danh sách mùa anime
 * @returns Danh sách mùa anime
 */
export async function getSeasons(): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.SEASONS);
  return response;
}

/**
 * Lấy thông tin về một mùa anime cụ thể
 * @param year Năm
 * @param season Mùa (winter, spring, summer, fall)
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @returns Thông tin mùa anime
 */
export async function getSeason(
  year: number,
  season: "winter" | "spring" | "summer" | "fall",
  page: number = 1,
  limit: number = 25
): Promise<{ data: Anime[]; pagination: any }> {
  const response = await jikanAPI.request<{ data: Anime[]; pagination: any }>(
    ENDPOINTS.SEASON,
    { year, season, page, limit }
  );
  return response;
}

/**
 * Lấy thông tin về mùa anime hiện tại
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @returns Thông tin mùa anime hiện tại
 */
export async function getCurrentSeason(
  page: number = 1,
  limit: number = 25
): Promise<{ data: Anime[]; pagination: any }> {
  const response = await jikanAPI.request<{ data: Anime[]; pagination: any }>(
    ENDPOINTS.SEASON_NOW,
    { page, limit }
  );
  return response;
}

/**
 * Lấy thông tin về mùa anime sắp tới
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @returns Thông tin mùa anime sắp tới
 */
export async function getUpcomingSeason(
  page: number = 1,
  limit: number = 25
): Promise<{ data: Anime[]; pagination: any }> {
  const response = await jikanAPI.request<{ data: Anime[]; pagination: any }>(
    ENDPOINTS.SEASON_UPCOMING,
    { page, limit }
  );
  return response;
}
