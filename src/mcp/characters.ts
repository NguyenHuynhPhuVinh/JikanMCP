/**
 * Đăng ký các công cụ MCP liên quan đến nhân vật
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as characterTools from "../tools/characters.js";

/**
 * Đăng ký các công cụ nhân vật cho MCP server
 * @param server MCP server instance
 */
export function registerCharacterTools(server: McpServer): void {
  // Lấy thông tin về một nhân vật cụ thể
  server.tool(
    "getCharacter",
    "Lấy thông tin về một nhân vật cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của nhân vật trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await characterTools.getCharacter(id);
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
              text: `Lỗi khi lấy thông tin nhân vật: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin đầy đủ về một nhân vật cụ thể
  server.tool(
    "getCharacterFull",
    "Lấy thông tin đầy đủ về một nhân vật cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của nhân vật trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await characterTools.getCharacterFull(id);
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
              text: `Lỗi khi lấy thông tin đầy đủ về nhân vật: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách anime mà nhân vật xuất hiện
  server.tool(
    "getCharacterAnime",
    "Lấy danh sách anime mà nhân vật xuất hiện",
    {
      id: z.number().describe("ID của nhân vật trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await characterTools.getCharacterAnime(id);
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
              text: `Lỗi khi lấy danh sách anime của nhân vật: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách manga mà nhân vật xuất hiện
  server.tool(
    "getCharacterManga",
    "Lấy danh sách manga mà nhân vật xuất hiện",
    {
      id: z.number().describe("ID của nhân vật trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await characterTools.getCharacterManga(id);
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
              text: `Lỗi khi lấy danh sách manga của nhân vật: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách hình ảnh của nhân vật
  server.tool(
    "getCharacterPictures",
    "Lấy danh sách hình ảnh của nhân vật",
    {
      id: z.number().describe("ID của nhân vật trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await characterTools.getCharacterPictures(id);
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
              text: `Lỗi khi lấy danh sách hình ảnh của nhân vật: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Tìm kiếm nhân vật
  server.tool(
    "searchCharacters",
    "Tìm kiếm nhân vật trên MyAnimeList",
    {
      q: z.string().describe("Từ khóa tìm kiếm"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      order_by: z.enum(["mal_id", "name", "favorites"]).optional().describe("Sắp xếp theo"),
      sort: z.enum(["desc", "asc"]).optional().describe("Thứ tự sắp xếp"),
    },
    async (params) => {
      try {
        const data = await characterTools.searchCharacters(params);
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
              text: `Lỗi khi tìm kiếm nhân vật: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy nhân vật ngẫu nhiên
  server.tool(
    "getRandomCharacter",
    "Lấy thông tin về một nhân vật ngẫu nhiên",
    {},
    async () => {
      try {
        const data = await characterTools.getRandomCharacter();
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
              text: `Lỗi khi lấy nhân vật ngẫu nhiên: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
