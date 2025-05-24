/**
 * Đăng ký các công cụ MCP liên quan đến tìm kiếm
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as searchTools from "../tools/search.js";

/**
 * Đăng ký các công cụ tìm kiếm cho MCP server
 * @param server MCP server instance
 */
export function registerSearchTools(server: McpServer): void {
  // Tìm kiếm tổng hợp
  server.tool(
    "search",
    "Tìm kiếm tổng hợp (anime, manga, nhân vật, người)",
    {
      query: z.string().describe("Từ khóa tìm kiếm"),
      type: z.enum(["anime", "manga", "character", "person"]).describe("Loại tìm kiếm"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ query, type, page, limit }) => {
      try {
        const data = await searchTools.search(query, type, page, limit);
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
              text: `Lỗi khi tìm kiếm: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
