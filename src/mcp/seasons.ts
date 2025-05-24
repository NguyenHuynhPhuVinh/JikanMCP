/**
 * Đăng ký các công cụ MCP liên quan đến mùa anime
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as seasonTools from "../tools/seasons.js";

/**
 * Đăng ký các công cụ mùa anime cho MCP server
 * @param server MCP server instance
 */
export function registerSeasonTools(server: McpServer): void {
  // Lấy danh sách mùa anime
  server.tool(
    "getSeasons",
    "Lấy danh sách mùa anime",
    {},
    async () => {
      try {
        const data = await seasonTools.getSeasons();
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
              text: `Lỗi khi lấy danh sách mùa anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin về một mùa anime cụ thể
  server.tool(
    "getSeason",
    "Lấy thông tin về một mùa anime cụ thể",
    {
      year: z.number().describe("Năm"),
      season: z.enum(["winter", "spring", "summer", "fall"]).describe("Mùa (winter, spring, summer, fall)"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ year, season, page, limit }) => {
      try {
        const data = await seasonTools.getSeason(year, season, page, limit);
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
              text: `Lỗi khi lấy thông tin mùa anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin về mùa anime hiện tại
  server.tool(
    "getCurrentSeason",
    "Lấy thông tin về mùa anime hiện tại",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await seasonTools.getCurrentSeason(page, limit);
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
              text: `Lỗi khi lấy thông tin mùa anime hiện tại: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin về mùa anime sắp tới
  server.tool(
    "getUpcomingSeason",
    "Lấy thông tin về mùa anime sắp tới",
    {
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ page, limit }) => {
      try {
        const data = await seasonTools.getUpcomingSeason(page, limit);
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
              text: `Lỗi khi lấy thông tin mùa anime sắp tới: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
