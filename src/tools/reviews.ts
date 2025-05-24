import { fetchJikanData } from '../api/jikan.js';
import { JIKAN_ENDPOINTS } from '../api/constants.js';

/**
 * Lấy danh sách đánh giá anime
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách đánh giá anime
 */
export async function getAnimeReviews(page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.REVIEWS}/anime${queryString}`);
}

/**
 * Lấy danh sách đánh giá manga
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách đánh giá manga
 */
export async function getMangaReviews(page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.REVIEWS}/manga${queryString}`);
}

/**
 * Lấy đánh giá anime theo ID
 * @param id ID của đánh giá anime
 * @returns Thông tin về đánh giá anime
 */
export async function getAnimeReviewById(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.REVIEWS}/anime/${id}`);
}

/**
 * Lấy đánh giá manga theo ID
 * @param id ID của đánh giá manga
 * @returns Thông tin về đánh giá manga
 */
export async function getMangaReviewById(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.REVIEWS}/manga/${id}`);
}
