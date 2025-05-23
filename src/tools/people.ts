/**
 * Các công cụ MCP liên quan đến người (seiyuu, đạo diễn...)
 */
import { JikanAPI } from "../api/jikan.js";
import { ENDPOINTS } from "../api/constants.js";
import { Person, PersonFull, PersonSearchParams } from "../types/person.js";
import { JikanResponse } from "../types/common.js";

// Khởi tạo Jikan API client
const jikanAPI = new JikanAPI();

/**
 * Lấy thông tin về một người cụ thể
 * @param id ID của người
 * @returns Thông tin người
 */
export async function getPerson(id: number): Promise<Person> {
  const response = await jikanAPI.request<JikanResponse<Person>>(
    ENDPOINTS.PERSON_BY_ID,
    { id }
  );
  return response.data;
}

/**
 * Lấy thông tin đầy đủ về một người cụ thể
 * @param id ID của người
 * @returns Thông tin đầy đủ về người
 */
export async function getPersonFull(id: number): Promise<PersonFull> {
  const response = await jikanAPI.request<JikanResponse<PersonFull>>(
    ENDPOINTS.PERSON_FULL,
    { id }
  );
  return response.data;
}

/**
 * Lấy danh sách anime mà người đã tham gia
 * @param id ID của người
 * @returns Danh sách anime
 */
export async function getPersonAnime(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.PERSON_ANIME, { id });
  return response;
}

/**
 * Lấy danh sách manga mà người đã tham gia
 * @param id ID của người
 * @returns Danh sách manga
 */
export async function getPersonManga(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.PERSON_MANGA, { id });
  return response;
}

/**
 * Lấy danh sách hình ảnh của người
 * @param id ID của người
 * @returns Danh sách hình ảnh
 */
export async function getPersonPictures(id: number): Promise<any> {
  const response = await jikanAPI.request<any>(ENDPOINTS.PERSON_PICTURES, {
    id,
  });
  return response;
}

/**
 * Tìm kiếm người
 * @param params Tham số tìm kiếm
 * @returns Kết quả tìm kiếm
 */
export async function searchPeople(
  params: PersonSearchParams
): Promise<{ data: Person[]; pagination: any }> {
  const response = await jikanAPI.request<{ data: Person[]; pagination: any }>(
    ENDPOINTS.PERSON,
    params
  );
  return response;
}

/**
 * Lấy người ngẫu nhiên
 * @returns Thông tin người ngẫu nhiên
 */
export async function getRandomPerson(): Promise<Person> {
  const response = await jikanAPI.request<JikanResponse<Person>>(
    ENDPOINTS.RANDOM_PERSON
  );
  return response.data;
}
