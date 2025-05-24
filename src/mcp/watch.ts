import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as watchTools from "../tools/watch.js";

/**
 * Đăng ký các công cụ MCP liên quan đến watch
 * @param server Instance của McpServer
 */
export function registerWatchTools(server: McpServer) {
  // Lấy danh sách tập mới nhất
  server.tool(
    "getRecentEpisodes",
    "Lấy danh sách tập mới nhất từ MyAnimeList",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await watchTools.getRecentEpisodes(page, limit);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy danh sách tập mới nhất: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách tập phổ biến
  server.tool(
    "getPopularEpisodes",
    "Lấy danh sách tập phổ biến từ MyAnimeList",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await watchTools.getPopularEpisodes(page, limit);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy danh sách tập phổ biến: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách promo mới nhất
  server.tool(
    "getRecentPromos",
    "Lấy danh sách promo mới nhất từ MyAnimeList",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await watchTools.getRecentPromos(page, limit);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy danh sách promo mới nhất: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách promo phổ biến
  server.tool(
    "getPopularPromos",
    "Lấy danh sách promo phổ biến từ MyAnimeList",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await watchTools.getPopularPromos(page, limit);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Lỗi khi lấy danh sách promo phổ biến: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );
}
