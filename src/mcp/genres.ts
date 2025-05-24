/**
 * Đăng ký các công cụ MCP liên quan đến thể loại
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as genreTools from "../tools/genres.js";

/**
 * Đăng ký các công cụ thể loại cho MCP server
 * @param server MCP server instance
 */
export function registerGenreTools(server: McpServer): void {
  // Lấy danh sách thể loại anime
  server.tool(
    "getAnimeGenres",
    "Lấy danh sách thể loại anime",
    {
      filter: z.enum(["genres", "explicit_genres", "themes", "demographics"]).optional().describe("Lọc theo loại"),
    },
    async ({ filter }) => {
      try {
        const data = await genreTools.getAnimeGenres(filter);
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
              text: `Lỗi khi lấy danh sách thể loại anime: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách thể loại manga
  server.tool(
    "getMangaGenres",
    "Lấy danh sách thể loại manga",
    {
      filter: z.enum(["genres", "explicit_genres", "themes", "demographics"]).optional().describe("Lọc theo loại"),
    },
    async ({ filter }) => {
      try {
        const data = await genreTools.getMangaGenres(filter);
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
              text: `Lỗi khi lấy danh sách thể loại manga: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
