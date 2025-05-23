/**
 * Các kiểu dữ liệu chung cho JikanMCP
 */

/**
 * Cấu trúc phản hồi chuẩn từ Jikan API
 */
export interface JikanResponse<T> {
  data: T;
  pagination?: Pagination;
}

/**
 * Thông tin phân trang
 */
export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

/**
 * Thông tin hình ảnh
 */
export interface Image {
  jpg?: {
    image_url?: string;
    small_image_url?: string;
    large_image_url?: string;
  };
  webp?: {
    image_url?: string;
    small_image_url?: string;
    large_image_url?: string;
  };
}

/**
 * Thông tin ngày tháng
 */
export interface DateRange {
  from?: string;
  to?: string;
  prop?: {
    from?: {
      day?: number;
      month?: number;
      year?: number;
    };
    to?: {
      day?: number;
      month?: number;
      year?: number;
    };
  };
  string?: string;
}

/**
 * Thông tin thể loại, chủ đề, nhân khẩu học
 */
export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

/**
 * Tham số tìm kiếm chung
 */
export interface SearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: string;
  sort?: 'desc' | 'asc';
  letter?: string;
}
