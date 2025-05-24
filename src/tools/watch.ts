import { fetchJikanData } from '../api/jikan.js';
import { JIKAN_ENDPOINTS } from '../api/constants.js';

/**
 * Lấy danh sách tập mới nhất
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách tập mới nhất
 */
export async function getRecentEpisodes(page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.WATCH}/episodes${queryString}`);
}

/**
 * Lấy danh sách tập phổ biến
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách tập phổ biến
 */
export async function getPopularEpisodes(page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.WATCH}/episodes/popular${queryString}`);
}

/**
 * Lấy danh sách promo mới nhất
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách promo mới nhất
 */
export async function getRecentPromos(page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.WATCH}/promos${queryString}`);
}

/**
 * Lấy danh sách promo phổ biến
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách promo phổ biến
 */
export async function getPopularPromos(page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.WATCH}/promos/popular${queryString}`);
}
