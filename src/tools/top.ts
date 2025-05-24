/**
 * Các công cụ MCP liên quan đến xếp hạng (top)
 */
import { JikanAPI } from '../api/jikan.js';
import { ENDPOINTS } from '../api/constants.js';
import { Anime } from '../types/anime.js';
import { Manga } from '../types/manga.js';
import { Character } from '../types/character.js';
import { Person } from '../types/person.js';
import { JikanResponse } from '../types/common.js';

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy danh sách anime xếp hạng cao
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @param type Loại anime
 * @param filter Bộ lọc
 * @returns Danh sách anime xếp hạng cao
 */
export async function getTopAnime(
  page: number = 1,
  limit: number = 25,
  type?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music',
  filter?: 'airing' | 'upcoming' | 'bypopularity' | 'favorite'
): Promise<{ data: Anime[], pagination: any }> {
  const response = await jikanAPI.request<{ data: Anime[], pagination: any }>(
    ENDPOINTS.TOP_ANIME,
    { page, limit, type, filter }
  );
  return response;
}

/**
 * Lấy danh sách manga xếp hạng cao
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @param type Loại manga
 * @param filter Bộ lọc
 * @returns Danh sách manga xếp hạng cao
 */
export async function getTopManga(
  page: number = 1,
  limit: number = 25,
  type?: 'manga' | 'novel' | 'lightnovel' | 'oneshot' | 'doujin' | 'manhwa' | 'manhua',
  filter?: 'publishing' | 'upcoming' | 'bypopularity' | 'favorite'
): Promise<{ data: Manga[], pagination: any }> {
  const response = await jikanAPI.request<{ data: Manga[], pagination: any }>(
    ENDPOINTS.TOP_MANGA,
    { page, limit, type, filter }
  );
  return response;
}

/**
 * Lấy danh sách nhân vật xếp hạng cao
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @returns Danh sách nhân vật xếp hạng cao
 */
export async function getTopCharacters(
  page: number = 1,
  limit: number = 25
): Promise<{ data: Character[], pagination: any }> {
  const response = await jikanAPI.request<{ data: Character[], pagination: any }>(
    ENDPOINTS.TOP_CHARACTERS,
    { page, limit }
  );
  return response;
}

/**
 * Lấy danh sách người xếp hạng cao
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @returns Danh sách người xếp hạng cao
 */
export async function getTopPeople(
  page: number = 1,
  limit: number = 25
): Promise<{ data: Person[], pagination: any }> {
  const response = await jikanAPI.request<{ data: Person[], pagination: any }>(
    ENDPOINTS.TOP_PEOPLE,
    { page, limit }
  );
  return response;
}

/**
 * Lấy danh sách đánh giá xếp hạng cao
 * @param page Số trang
 * @param limit Số lượng kết quả trên mỗi trang
 * @param type Loại đánh giá (anime hoặc manga)
 * @returns Danh sách đánh giá xếp hạng cao
 */
export async function getTopReviews(
  page: number = 1,
  limit: number = 25,
  type?: 'anime' | 'manga'
): Promise<any> {
  const response = await jikanAPI.request<any>(
    ENDPOINTS.TOP_REVIEWS,
    { page, limit, type }
  );
  return response;
}
