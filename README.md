# JikanMCP

## Giới thiệu

JikanMCP là một Model Context Protocol (MCP) server cho Jikan API - API không chính thức của MyAnimeList. Server này cung cấp các công cụ để tương tác với dữ liệu anime, manga, nhân vật, người, club, nhà sản xuất và nhiều thông tin liên quan khác thông qua giao thức MCP.

### Cấu hình với Model Context Protocol (MCP)

#### Giới thiệu về MCP

Model Context Protocol (MCP) là một tiêu chuẩn mở cho phép kết nối các hệ thống AI với các nguồn dữ liệu và công cụ bên ngoài (như kho lưu trữ, công cụ kinh doanh, môi trường phát triển). MCP thay thế các tích hợp phân mảnh bằng một giao thức duy nhất, giúp các ứng dụng AI (client) và các server dễ dàng tương tác với nhau.

Kiến trúc MCP bao gồm:

- **Client**: Các ứng dụng AI hoặc agent muốn truy cập hệ thống bên ngoài (ví dụ: Claude, Cursor, Windsurf)
- **Server**: Các wrapper hoặc trung gian cung cấp cách tiêu chuẩn để truy cập các hệ thống bên ngoài (ví dụ: JikanMCP)
- **Host**: Quản lý và điều phối các client, thực thi chính sách bảo mật

#### Cấu hình JikanMCP cho các ứng dụng

##### 1. Cấu hình cho Claude Desktop

1. Mở Claude Desktop và vào Settings
2. Chọn mục Developer và bật Developer Mode
3. Tìm file cấu hình tại:
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
4. Thêm cấu hình JikanMCP vào file:

```json
{
  "mcpServers": {
    "JikanMCP": {
      "command": "npx",
      "args": ["-y", "@tomisakae/jikan-mcp"]
    }
  }
}
```

5. Lưu file và khởi động lại Claude Desktop
6. Kiểm tra biểu tượng công cụ ở góc dưới bên phải để xác nhận MCP đã hoạt động

#### Lợi ích của MCP

- **Tích hợp linh hoạt**: Các client có thể kết nối với nhiều server khác nhau mà không cần biết chi tiết về từng hệ thống
- **Tái sử dụng**: Các nhà phát triển server có thể xây dựng tích hợp một lần và có thể truy cập đến nhiều ứng dụng client khác nhau
- **Phân tách trách nhiệm**: Các đội khác nhau có thể tập trung vào việc xây dựng ứng dụng client hoặc tích hợp server một cách độc lập

## Tính năng

JikanMCP cung cấp các công cụ sau:

### Anime

- Lấy thông tin anime
- Tìm kiếm anime
- Lấy nhân vật, tập, tin tức, video, thống kê, đề xuất
- Lấy anime ngẫu nhiên

### Manga

- Lấy thông tin manga
- Tìm kiếm manga
- Lấy nhân vật, tin tức, thống kê, đề xuất
- Lấy manga ngẫu nhiên

### Nhân vật

- Lấy thông tin nhân vật
- Tìm kiếm nhân vật
- Lấy danh sách anime, manga, hình ảnh

### Người

- Lấy thông tin người
- Tìm kiếm người
- Lấy danh sách anime, manga, hình ảnh

### Mùa

- Lấy thông tin mùa hiện tại
- Lấy thông tin mùa sắp tới

### Lịch phát sóng

- Lấy lịch phát sóng anime

### Thể loại

- Lấy danh sách thể loại anime và manga

### Tìm kiếm

- Tìm kiếm tổng hợp (anime, manga, nhân vật, người)

### Xếp hạng

- Lấy danh sách top anime, manga, nhân vật, người

### Club

- Lấy thông tin club
- Lấy danh sách thành viên, staff, anime và manga liên quan

### Nhà sản xuất

- Lấy thông tin nhà sản xuất
- Lấy danh sách anime của nhà sản xuất

### Đánh giá

- Lấy danh sách đánh giá anime và manga

### Watch

- Lấy danh sách tập mới nhất và phổ biến
- Lấy danh sách promo mới nhất và phổ biến

## Giấy phép

Dự án này được phát hành dưới giấy phép MIT.
