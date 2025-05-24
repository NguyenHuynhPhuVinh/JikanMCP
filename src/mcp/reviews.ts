import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as reviewTools from "../tools/reviews.js";

/**
 * Đăng ký các công cụ MCP liên quan đến đánh giá
 * @param server Instance của McpServer
 */
export function registerReviewTools(server: McpServer) {
  // Lấy danh sách đánh giá anime
  server.tool(
    "getAnimeReviews",
    "Lấy danh sách đánh giá anime từ MyAnimeList",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await reviewTools.getAnimeReviews(page, limit);
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
              text: `Lỗi khi lấy danh sách đánh giá anime: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách đánh giá manga
  server.tool(
    "getMangaReviews",
    "Lấy danh sách đánh giá manga từ MyAnimeList",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await reviewTools.getMangaReviews(page, limit);
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
              text: `Lỗi khi lấy danh sách đánh giá manga: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy đánh giá anime theo ID
  server.tool(
    "getAnimeReviewById",
    "Lấy đánh giá anime theo ID từ MyAnimeList",
    {
      id: z.number().describe("ID của đánh giá anime trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await reviewTools.getAnimeReviewById(id);
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
              text: `Lỗi khi lấy đánh giá anime theo ID: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy đánh giá manga theo ID
  server.tool(
    "getMangaReviewById",
    "Lấy đánh giá manga theo ID từ MyAnimeList",
    {
      id: z.number().describe("ID của đánh giá manga trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await reviewTools.getMangaReviewById(id);
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
              text: `Lỗi khi lấy đánh giá manga theo ID: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );
}
