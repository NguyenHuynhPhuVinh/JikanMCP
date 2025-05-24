import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as clubTools from "../tools/clubs.js";

/**
 * Đăng ký các công cụ MCP liên quan đến clubs
 * @param server Instance của McpServer
 */
export function registerClubTools(server: McpServer) {
  // Lấy thông tin về một club cụ thể
  server.tool(
    "getClub",
    "Lấy thông tin về một club cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của club trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await clubTools.getClub(id);
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
              text: `Lỗi khi lấy thông tin club: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách thành viên của club
  server.tool(
    "getClubMembers",
    "Lấy danh sách thành viên của club từ MyAnimeList",
    {
      id: z.number().describe("ID của club trên MyAnimeList"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 24)"),
    },
    async ({ id, page, limit }) => {
      try {
        const data = await clubTools.getClubMembers(id, page, limit);
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
              text: `Lỗi khi lấy danh sách thành viên club: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách staff của club
  server.tool(
    "getClubStaff",
    "Lấy danh sách staff của club từ MyAnimeList",
    {
      id: z.number().describe("ID của club trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await clubTools.getClubStaff(id);
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
              text: `Lỗi khi lấy danh sách staff club: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách anime liên quan đến club
  server.tool(
    "getClubRelatedAnime",
    "Lấy danh sách anime liên quan đến club từ MyAnimeList",
    {
      id: z.number().describe("ID của club trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await clubTools.getClubRelatedAnime(id);
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
              text: `Lỗi khi lấy danh sách anime liên quan đến club: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách manga liên quan đến club
  server.tool(
    "getClubRelatedManga",
    "Lấy danh sách manga liên quan đến club từ MyAnimeList",
    {
      id: z.number().describe("ID của club trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await clubTools.getClubRelatedManga(id);
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
              text: `Lỗi khi lấy danh sách manga liên quan đến club: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );
}
