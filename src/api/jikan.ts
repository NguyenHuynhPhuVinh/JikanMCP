/**
 * Lớp giao tiếp với Jikan API
 */
import { config } from "../config/config.js";

/**
 * Lớp JikanAPI cung cấp các phương thức để gọi Jikan API
 */
export class JikanAPI {
  private baseUrl: string;
  private requestQueue: Promise<any> = Promise.resolve();

  constructor() {
    this.baseUrl = config.jikanBaseUrl;
  }

  /**
   * Thực hiện HTTP request đến Jikan API với xử lý hàng đợi để tránh rate limit
   * @param endpoint Endpoint của API
   * @param params Các tham số query string
   * @returns Dữ liệu trả về từ API
   */
  async request<T>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<T> {
    // Thay thế các tham số trong URL path
    let url = endpoint;
    for (const key in params) {
      if (url.includes(`{${key}}`)) {
        url = url.replace(`{${key}}`, params[key]);
        delete params[key];
      }
    }

    // Xây dựng query string từ các tham số còn lại
    const queryParams = new URLSearchParams();
    for (const key in params) {
      if (params[key] !== undefined && params[key] !== null) {
        queryParams.append(key, String(params[key]));
      }
    }

    const queryString = queryParams.toString();
    const fullUrl = `${this.baseUrl}${url}${
      queryString ? `?${queryString}` : ""
    }`;

    // Thêm request vào hàng đợi để tránh rate limit
    this.requestQueue = this.requestQueue
      .then(
        () => new Promise((resolve) => setTimeout(resolve, config.requestDelay))
      )
      .then(() => this.fetchWithRetry(fullUrl));

    return this.requestQueue;
  }

  /**
   * Thực hiện HTTP request với cơ chế retry
   * @param url URL đầy đủ để gọi API
   * @returns Dữ liệu trả về từ API
   */
  private async fetchWithRetry(url: string, retries = 3): Promise<any> {
    try {
      const response = await fetch(url);

      if (response.status === 429) {
        // Rate limit - chờ và thử lại
        if (retries > 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return this.fetchWithRetry(url, retries - 1);
        } else {
          throw new Error("Rate limit exceeded");
        }
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (
        retries > 0 &&
        error instanceof Error &&
        error.message !== "Rate limit exceeded"
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return this.fetchWithRetry(url, retries - 1);
      }
      throw error;
    }
  }
}
