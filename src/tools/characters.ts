/**
 * Các công cụ MCP liên quan đến nhân vật
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import {
  Character,
  CharacterFull,
  CharacterSearchParams,
} from "../types/character.js";
import { JikanResponse } from "../types/common.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy thông tin về một nhân vật cụ thể
 * @param id ID của nhân vật
 * @returns Thông tin nhân vật
 */
export async function getCharacter(id: number): Promise<Character> {
  const response = await jikanAPI.request<JikanResponse<Character>>(
    ENDPOINTS.CHARACTER_BY_ID,
    { id }
  );
  return response.data;
}

/**
 * Lấy thông tin đầy đủ về một nhân vật cụ thể
 * @param id ID của nhân vật
 * @returns Thông tin đầy đủ về nhân vật
 */
export async function getCharacterFull(id: number): Promise<CharacterFull> {
  const response = await jikanAPI.request<JikanResponse<CharacterFull>>(
    ENDPOINTS.CHARACTER_FULL,
    { id }
  );
  return response.data;
}

/**
 * Lấy danh sách anime mà nhân vật xuất hiện
 * @param id ID của nhân vật
 * @returns Danh sách anime
 */
export async function getCharacterAnime(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.CHARACTER_ANIME, {
    id,
  });
  return response;
}

/**
 * Lấy danh sách manga mà nhân vật xuất hiện
 * @param id ID của nhân vật
 * @returns Danh sách manga
 */
export async function getCharacterManga(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.CHARACTER_MANGA, {
    id,
  });
  return response;
}

/**
 * Lấy danh sách hình ảnh của nhân vật
 * @param id ID của nhân vật
 * @returns Danh sách hình ảnh
 */
export async function getCharacterPictures(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.CHARACTER_PICTURES, {
    id,
  });
  return response;
}

/**
 * Tìm kiếm nhân vật
 * @param params Tham số tìm kiếm
 * @returns Kết quả tìm kiếm
 */
export async function searchCharacters(
  params: CharacterSearchParams
): Promise<{ data: Character[]; pagination: any }> {
  const response = await jikanAPI.request<{
    data: Character[];
    pagination: any;
  }>(ENDPOINTS.CHARACTER, params);
  return response;
}

/**
 * Lấy nhân vật ngẫu nhiên
 * @returns Thông tin nhân vật ngẫu nhiên
 */
export async function getRandomCharacter(): Promise<Character> {
  const response = await jikanAPI.request<JikanResponse<Character>>(
    ENDPOINTS.RANDOM_CHARACTER
  );
  return response.data;
}
