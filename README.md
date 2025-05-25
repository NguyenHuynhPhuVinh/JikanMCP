# JikanMCP 🌟

JikanMCP là một máy chủ Model Context Protocol (MCP) mạnh mẽ được thiết kế để kết nối với Jikan API - một API không chính thức phổ biến của MyAnimeList. Với JikanMCP, bạn có thể dễ dàng truy cập và tương tác với kho dữ liệu khổng lồ về anime, manga, nhân vật, tác giả, câu lạc bộ, nhà sản xuất, và nhiều hơn nữa, tất cả đều thông qua giao thức MCP tiện lợi.

## Model Context Protocol (MCP) là gì? 🤔

Model Context Protocol (MCP) là một tiêu chuẩn mở đột phá, cho phép các hệ thống Trí Tuệ Nhân Tạo (AI) kết nối một cách liền mạch với các nguồn dữ liệu và công cụ bên ngoài. Hãy tưởng tượng MCP như một "thông dịch viên" đa năng, giúp các ứng dụng AI (client) và các máy chủ cung cấp dữ liệu (server) "nói chuyện" với nhau một cách dễ dàng, thay thế cho vô số các tích hợp riêng lẻ và phức tạp.

**Kiến trúc MCP bao gồm ba thành phần chính:**

- **Client**: Các ứng dụng AI hoặc agent thông minh (ví dụ: Claude, Cursor, Windsurf) muốn "học hỏi" hoặc sử dụng dữ liệu từ thế giới bên ngoài.
- **Server**: Các "cầu nối" hoặc "trung gian" như JikanMCP, cung cấp một cách thức chuẩn hóa để client truy cập vào các hệ thống bên ngoài.
- **Host**: "Người quản lý" điều phối các client, thực thi các chính sách bảo mật và đảm bảo mọi thứ hoạt động trơn tru.

**Tại sao MCP lại tuyệt vời?** ✨

- **Tích hợp linh hoạt**: Client có thể "bắt tay" với nhiều server khác nhau mà không cần phải hiểu rõ chi tiết kỹ thuật của từng hệ thống.
- **Tái sử dụng tối đa**: Các nhà phát triển server chỉ cần xây dựng tích hợp một lần, và nó có thể được sử dụng bởi vô số client khác nhau.
- **Phân tách rõ ràng**: Các nhóm phát triển có thể tập trung vào chuyên môn của mình – xây dựng client AI hoặc tích hợp server – một cách độc lập và hiệu quả.

## Bắt đầu với JikanMCP 🚀

### Yêu cầu

- Node.js (phiên bản khuyến nghị: 18.x trở lên)
- npm (thường đi kèm với Node.js)

### Cài đặt

Bạn có thể dễ dàng cài đặt JikanMCP thông qua npm:

```bash
npm install @tomisakae/jikan-mcp
```

Hoặc nếu bạn muốn sử dụng trực tiếp với `npx` mà không cần cài đặt toàn cục:

```bash
npx @tomisakae/jikan-mcp
```

### Cấu hình JikanMCP cho Ứng dụng Client (Ví dụ: Claude Desktop)

Để "dạy" cho ứng dụng AI của bạn cách sử dụng JikanMCP, bạn cần cấu hình nó trong ứng dụng client.

**Đối với Claude Desktop:**

1.  Mở ứng dụng Claude Desktop và điều hướng đến **Settings**.
2.  Chọn mục **Developer** và kích hoạt **Developer Mode**.
3.  Tìm tệp cấu hình của Claude Desktop:
    - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
    - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
4.  Thêm đoạn cấu hình sau vào tệp `claude_desktop_config.json`:

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

    _(Lưu ý: Nếu tệp đã có sẵn mục `mcpServers`, hãy thêm `JikanMCP` vào danh sách đó.)_

5.  Lưu tệp cấu hình và **khởi động lại** Claude Desktop.
6.  Sau khi khởi động lại, hãy kiểm tra biểu tượng công cụ (thường ở góc dưới bên phải) để đảm bảo JikanMCP đã được kết nối và sẵn sàng hoạt động! 🎉

## Các Tính Năng Chính 🛠️

JikanMCP cung cấp một loạt các công cụ mạnh mẽ để bạn khám phá thế giới anime và manga:

### ანიმე (Anime)

- Lấy thông tin chi tiết về một anime.
- Tìm kiếm anime theo từ khóa và nhiều tiêu chí khác.
- Truy xuất danh sách nhân vật, đội ngũ sản xuất, các tập phim, tin tức, video, hình ảnh, thống kê, và các anime được đề xuất.
- Khám phá một anime ngẫu nhiên!

### マンガ (Manga)

- Lấy thông tin chi tiết về một manga.
- Tìm kiếm manga theo từ khóa và nhiều tiêu chí khác.
- Truy xuất danh sách nhân vật, tin tức, hình ảnh, thống kê, và các manga được đề xuất.
- Khám phá một manga ngẫu nhiên!

### キャラクター (Nhân Vật)

- Lấy thông tin chi tiết về một nhân vật.
- Tìm kiếm nhân vật.
- Xem danh sách anime, manga, và hình ảnh liên quan đến nhân vật.

### 人 (Người - Tác giả, Diễn viên lồng tiếng,...)

- Lấy thông tin chi tiết về một người.
- Tìm kiếm người.
- Xem danh sách anime, manga, và hình ảnh liên quan đến người đó.

### シーズン (Mùa Anime)

- Lấy thông tin về các anime trong mùa hiện tại.
- Xem trước các anime sắp ra mắt trong mùa tới.

### スケジュール (Lịch Phát Sóng)

- Theo dõi lịch phát sóng hàng tuần của các bộ anime.

### ジャンル (Thể Loại)

- Khám phá danh sách các thể loại anime và manga.

### トップ (Xếp Hạng)

- Xem danh sách top anime, manga, nhân vật, và người được yêu thích nhất.

### クラブ (Câu Lạc Bộ)

- Lấy thông tin chi tiết về một câu lạc bộ trên MyAnimeList.
- Xem danh sách thành viên, đội ngũ quản lý, và các anime/manga liên quan đến câu lạc bộ.

### プロデューサー (Nhà Sản Xuất)

- Lấy thông tin chi tiết về một nhà sản xuất/studio.
- Xem danh sách các anime do họ sản xuất.

### レビュー (Đánh Giá)

- Đọc các bài đánh giá mới nhất về anime và manga.

### ウォッチ (Xem)

- Khám phá các tập anime mới được phát hành và phổ biến.
- Xem các video quảng cáo (promo) mới nhất và nổi bật.

## Đóng Góp 🤝

Những đóng góp của bạn luôn được chào đón! Nếu bạn có ý tưởng cải thiện, sửa lỗi, hoặc thêm tính năng mới, đừng ngần ngại tạo một **Issue** hoặc gửi một **Pull Request** trên GitHub.

## Giấy Phép 📜

Dự án JikanMCP được phát hành dưới giấy phép MIT. Xem chi tiết tại tệp `LICENSE`.

---

Chúc Senpai có những trải nghiệm tuyệt vời với JikanMCP! Nếu có bất kỳ câu hỏi nào, đừng ngần ngại hỏi Code-tan nhé! (⁄ ⁄•⁄ω⁄•⁄ ⁄)♡
