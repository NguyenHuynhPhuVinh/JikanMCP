/**
 * Các công cụ MCP liên quan đến lịch phát sóng anime
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import { Anime } from "../types/anime.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy lịch phát sóng anime
 * @param filter Lọc theo ngày trong tuần
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @param kids Lọc anime dành cho trẻ em
 * @param sfw Lọc nội dung an toàn
 * @returns Lịch phát sóng anime
 */
export async function getSchedules(
  filter?:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
    | "unknown"
    | "other",
  page: number = 1,
  limit: number = 25,
  kids: boolean = false,
  sfw: boolean = false
): Promise<{ data: Record<string, Anime[]>; pagination: any }> {
  const response = await jikanAPI.request<{
    data: Record<string, Anime[]>;
    pagination: any;
  }>(ENDPOINTS.SCHEDULES, {
    filter,
    page,
    limit,
    kids: kids ? "true" : "false",
    sfw: sfw ? "true" : "false",
  });
  return response;
}
