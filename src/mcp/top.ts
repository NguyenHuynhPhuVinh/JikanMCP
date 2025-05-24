/**
 * Đăng ký các công cụ MCP liên quan đến xếp hạng (top)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as topTools from "../tools/top.js";

/**
 * Đăng ký các công cụ xếp hạng cho MCP server
 * @param server MCP server instance
 */
export function registerTopTools(server: McpServer): void {
  // Lấy danh sách anime xếp hạng cao
  server.tool(
    "getTopAnime",
    "Lấy danh sách anime xếp hạng cao",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      type: z.enum(["tv", "movie", "ova", "special", "ona", "music"]).optional().describe("Loại anime"),
      filter: z.enum(["airing", "upcoming", "bypopularity", "favorite"]).optional().describe("Bộ lọc"),
    },
    async ({ page, limit, type, filter }) => {
      try {
        const data = await topTools.getTopAnime(page, limit, type, filter);
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
              text: `Lỗi khi lấy danh sách anime xếp hạng cao: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách manga xếp hạng cao
  server.tool(
    "getTopManga",
    "Lấy danh sách manga xếp hạng cao",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      type: z.enum(["manga", "novel", "lightnovel", "oneshot", "doujin", "manhwa", "manhua"]).optional().describe("Loại manga"),
      filter: z.enum(["publishing", "upcoming", "bypopularity", "favorite"]).optional().describe("Bộ lọc"),
    },
    async ({ page, limit, type, filter }) => {
      try {
        const data = await topTools.getTopManga(page, limit, type, filter);
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
              text: `Lỗi khi lấy danh sách manga xếp hạng cao: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách nhân vật xếp hạng cao
  server.tool(
    "getTopCharacters",
    "Lấy danh sách nhân vật xếp hạng cao",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await topTools.getTopCharacters(page, limit);
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
              text: `Lỗi khi lấy danh sách nhân vật xếp hạng cao: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách người xếp hạng cao
  server.tool(
    "getTopPeople",
    "Lấy danh sách người xếp hạng cao",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await topTools.getTopPeople(page, limit);
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
              text: `Lỗi khi lấy danh sách người xếp hạng cao: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách đánh giá xếp hạng cao
  server.tool(
    "getTopReviews",
    "Lấy danh sách đánh giá xếp hạng cao",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      type: z.enum(["anime", "manga"]).optional().describe("Loại đánh giá (anime hoặc manga)"),
    },
    async ({ page, limit, type }) => {
      try {
        const data = await topTools.getTopReviews(page, limit, type);
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
              text: `Lỗi khi lấy danh sách đánh giá xếp hạng cao: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
