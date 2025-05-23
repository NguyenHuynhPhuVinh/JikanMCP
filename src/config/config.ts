/**
 * Cấu hình chung cho JikanMCP
 */

export const config = {
  // URL cơ sở của Jikan API
  jikanBaseUrl: 'https://api.jikan.moe/v4',
  
  // Thời gian cache (ms)
  cacheTime: 60 * 60 * 1000, // 1 giờ
  
  // Số lượng kết quả mặc định trên mỗi trang
  defaultLimit: 25,
  
  // Thời gian chờ giữa các request (ms) để tránh rate limit
  requestDelay: 400, // 400ms
};
