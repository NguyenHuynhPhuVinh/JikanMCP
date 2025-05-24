import { fetchJikanData } from '../api/jikan.js';
import { JIKAN_ENDPOINTS } from '../api/constants.js';

/**
 * Lấy thông tin về một nhà sản xuất cụ thể
 * @param id ID của nhà sản xuất trên MyAnimeList
 * @returns Thông tin về nhà sản xuất
 */
export async function getProducer(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.PRODUCERS}/${id}`);
}

/**
 * Lấy danh sách anime của nhà sản xuất
 * @param id ID của nhà sản xuất trên MyAnimeList
 * @param page Số trang (mặc định: 1)
 * @param limit Số lượng kết quả trên mỗi trang (mặc định: 25)
 * @returns Danh sách anime của nhà sản xuất
 */
export async function getProducerAnime(id: number, page?: number, limit?: number) {
  const queryParams = new URLSearchParams();
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  return fetchJikanData(`${JIKAN_ENDPOINTS.PRODUCERS}/${id}/anime${queryString}`);
}

/**
 * Lấy thông tin đầy đủ về nhà sản xuất
 * @param id ID của nhà sản xuất trên MyAnimeList
 * @returns Thông tin đầy đủ về nhà sản xuất
 */
export async function getProducerFull(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.PRODUCERS}/${id}/full`);
}

/**
 * Lấy thông tin bên ngoài của nhà sản xuất
 * @param id ID của nhà sản xuất trên MyAnimeList
 * @returns Thông tin bên ngoài của nhà sản xuất
 */
export async function getProducerExternal(id: number) {
  return fetchJikanData(`${JIKAN_ENDPOINTS.PRODUCERS}/${id}/external`);
}
