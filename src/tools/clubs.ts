import { fetchJikanData } from '../api/jikan.js';
import { JIKAN_ENDPOINTS } from '../api/constants.js';

/**
 * Lấy thông tin về một club cụ thể
 * @param id ID của club trên MyAnimeList
 * @returns Thông tin về club
 */
export async function getClub(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.CLUBS}/${id}`);
}

/**
 * Lấy danh sách thành viên của club
 * @param id ID của club trên MyAnimeList
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 24)
 * @returns Danh sách thành viên của club
 */
export async function getClubMembers(id: number, page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.CLUBS}/${id}/members${queryString}`);
}

/**
 * Lấy danh sách staff của club
 * @param id ID của club trên MyAnimeList
 * @returns Danh sách staff của club
 */
export async function getClubStaff(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.CLUBS}/${id}/staff`);
}

/**
 * Lấy danh sách anime liên quan đến club
 * @param id ID của club trên MyAnimeList
 * @returns Danh sách anime liên quan đến club
 */
export async function getClubRelatedAnime(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.CLUBS}/${id}/relations/anime`);
}

/**
 * Lấy danh sách manga liên quan đến club
 * @param id ID của club trên MyAnimeList
 * @returns Danh sách manga liên quan đến club
 */
export async function getClubRelatedManga(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.CLUBS}/${id}/relations/manga`);
}
