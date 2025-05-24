/**
 * Đăng ký các công cụ MCP liên quan đến lịch phát sóng anime
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as scheduleTools from "../tools/schedules.js";

/**
 * Đăng ký các công cụ lịch phát sóng anime cho MCP server
 * @param server MCP server instance
 */
export function registerScheduleTools(server: McpServer): void {
  // Lấy lịch phát sóng anime
  server.tool(
    "getSchedules",
    "Lấy lịch phát sóng anime",
    {
      filter: z.enum(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "unknown", "other"]).optional().describe("Lọc theo ngày trong tuần"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      kids: z.boolean().optional().describe("Lọc anime dành cho trẻ em"),
      sfw: z.boolean().optional().describe("Lọc nội dung an toàn"),
    },
    async ({ filter, page, limit, kids, sfw }) => {
      try {
        const data = await scheduleTools.getSchedules(filter, page, limit, kids, sfw);
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
              text: `Lỗi khi lấy lịch phát sóng anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
