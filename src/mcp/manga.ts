/**
 * Đăng ký các công cụ MCP liên quan đến manga
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as mangaTools from "../tools/manga.js";

/**
 * Đăng ký các công cụ manga cho MCP server
 * @param server MCP server instance
 */
export function registerMangaTools(server: McpServer): void {
  // Lấy thông tin về một manga cụ thể
  server.tool(
    "getManga",
    "Lấy thông tin về một manga cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của manga trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await mangaTools.getManga(id);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy thông tin manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin đầy đủ về một manga cụ thể
  server.tool(
    "getMangaFull",
    "Lấy thông tin đầy đủ về một manga cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của manga trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await mangaTools.getMangaFull(id);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy thông tin đầy đủ về manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Tìm kiếm manga
  server.tool(
    "searchManga",
    "Tìm kiếm manga trên MyAnimeList",
    {
      q: z.string().describe("Từ khóa tìm kiếm"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      type: z.enum(["manga", "novel", "lightnovel", "oneshot", "doujin", "manhwa", "manhua"]).optional().describe("Loại manga"),
      status: z.enum(["publishing", "complete", "hiatus", "discontinued", "upcoming"]).optional().describe("Trạng thái xuất bản"),
      sfw: z.boolean().optional().describe("Lọc nội dung an toàn (không có nội dung 18+)"),
    },
    async (params) => {
      try {
        const data = await mangaTools.searchManga(params);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi tìm kiếm manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách nhân vật trong manga
  server.tool(
    "getMangaCharacters",
    "Lấy danh sách nhân vật trong manga",
    {
      id: z.number().describe("ID của manga trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await mangaTools.getMangaCharacters(id);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy danh sách nhân vật trong manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy tin tức về manga
  server.tool(
    "getMangaNews",
    "Lấy tin tức về manga",
    {
      id: z.number().describe("ID của manga trên MyAnimeList"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
    },
    async ({ id, page }) => {
      try {
        const data = await mangaTools.getMangaNews(id, page);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy tin tức về manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thống kê về manga
  server.tool(
    "getMangaStatistics",
    "Lấy thống kê về manga",
    {
      id: z.number().describe("ID của manga trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await mangaTools.getMangaStatistics(id);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy thống kê về manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy đề xuất manga liên quan
  server.tool(
    "getMangaRecommendations",
    "Lấy đề xuất manga liên quan",
    {
      id: z.number().describe("ID của manga trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await mangaTools.getMangaRecommendations(id);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy đề xuất manga liên quan: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy manga ngẫu nhiên
  server.tool(
    "getRandomManga",
    "Lấy thông tin về một manga ngẫu nhiên",
    {},
    async () => {
      try {
        // Thêm hàm getRandomManga vào mangaTools
        const data = await mangaTools.getRandomManga();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy manga ngẫu nhiên: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
