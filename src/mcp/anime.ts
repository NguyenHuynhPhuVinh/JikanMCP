/**
 * Đăng ký các công cụ MCP liên quan đến anime
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as animeTools from "../tools/anime.js";

/**
 * Đăng ký các công cụ anime cho MCP server
 * @param server MCP server instance
 */
export function registerAnimeTools(server: McpServer): void {
  // Lấy thông tin về một anime cụ thể
  server.tool(
    "getAnime",
    "Lấy thông tin về một anime cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await animeTools.getAnime(id);
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
              text: `Lỗi khi lấy thông tin anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin đầy đủ về một anime cụ thể
  server.tool(
    "getAnimeFull",
    "Lấy thông tin đầy đủ về một anime cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await animeTools.getAnimeFull(id);
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
              text: `Lỗi khi lấy thông tin đầy đủ về anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Tìm kiếm anime
  server.tool(
    "searchAnime",
    "Tìm kiếm anime trên MyAnimeList",
    {
      q: z.string().describe("Từ khóa tìm kiếm"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      type: z.enum(["tv", "movie", "ova", "special", "ona", "music"]).optional().describe("Loại anime"),
      status: z.enum(["airing", "complete", "upcoming"]).optional().describe("Trạng thái phát sóng"),
      rating: z.enum(["g", "pg", "pg13", "r17", "r", "rx"]).optional().describe("Xếp hạng độ tuổi"),
      sfw: z.boolean().optional().describe("Lọc nội dung an toàn (không có nội dung 18+)"),
    },
    async (params) => {
      try {
        const data = await animeTools.searchAnime(params);
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
              text: `Lỗi khi tìm kiếm anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách nhân vật trong anime
  server.tool(
    "getAnimeCharacters",
    "Lấy danh sách nhân vật trong anime",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await animeTools.getAnimeCharacters(id);
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
              text: `Lỗi khi lấy danh sách nhân vật trong anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách tập của anime
  server.tool(
    "getAnimeEpisodes",
    "Lấy danh sách tập của anime",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
    },
    async ({ id, page }) => {
      try {
        const data = await animeTools.getAnimeEpisodes(id, page);
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
              text: `Lỗi khi lấy danh sách tập của anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin về một tập cụ thể của anime
  server.tool(
    "getAnimeEpisode",
    "Lấy thông tin về một tập cụ thể của anime",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
      episode: z.number().describe("Số tập"),
    },
    async ({ id, episode }) => {
      try {
        const data = await animeTools.getAnimeEpisode(id, episode);
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
              text: `Lỗi khi lấy thông tin tập của anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy tin tức về anime
  server.tool(
    "getAnimeNews",
    "Lấy tin tức về anime",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
    },
    async ({ id, page }) => {
      try {
        const data = await animeTools.getAnimeNews(id, page);
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
              text: `Lỗi khi lấy tin tức về anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy video liên quan đến anime
  server.tool(
    "getAnimeVideos",
    "Lấy video liên quan đến anime",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await animeTools.getAnimeVideos(id);
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
              text: `Lỗi khi lấy video liên quan đến anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thống kê về anime
  server.tool(
    "getAnimeStatistics",
    "Lấy thống kê về anime",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await animeTools.getAnimeStatistics(id);
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
              text: `Lỗi khi lấy thống kê về anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy đề xuất anime liên quan
  server.tool(
    "getAnimeRecommendations",
    "Lấy đề xuất anime liên quan",
    {
      id: z.number().describe("ID của anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await animeTools.getAnimeRecommendations(id);
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
              text: `Lỗi khi lấy đề xuất anime liên quan: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy anime ngẫu nhiên
  server.tool(
    "getRandomAnime",
    "Lấy thông tin về một anime ngẫu nhiên",
    {},
    async () => {
      try {
        // Thêm hàm getRandomAnime vào animeTools
        const data = await animeTools.getRandomAnime();
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
              text: `Lỗi khi lấy anime ngẫu nhiên: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
