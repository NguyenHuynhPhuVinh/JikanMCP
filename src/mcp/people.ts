/**
 * Đăng ký các công cụ MCP liên quan đến người (seiyuu, đạo diễn...)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as peopleTools from "../tools/people.js";

/**
 * Đăng ký các công cụ người cho MCP server
 * @param server MCP server instance
 */
export function registerPeopleTools(server: McpServer): void {
  // Lấy thông tin về một người cụ thể
  server.tool(
    "getPerson",
    "Lấy thông tin về một người cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của người trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await peopleTools.getPerson(id);
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
              text: `Lỗi khi lấy thông tin người: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin đầy đủ về một người cụ thể
  server.tool(
    "getPersonFull",
    "Lấy thông tin đầy đủ về một người cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của người trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await peopleTools.getPersonFull(id);
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
              text: `Lỗi khi lấy thông tin đầy đủ về người: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách anime mà người đã tham gia
  server.tool(
    "getPersonAnime",
    "Lấy danh sách anime mà người đã tham gia",
    {
      id: z.number().describe("ID của người trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await peopleTools.getPersonAnime(id);
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
              text: `Lỗi khi lấy danh sách anime của người: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách manga mà người đã tham gia
  server.tool(
    "getPersonManga",
    "Lấy danh sách manga mà người đã tham gia",
    {
      id: z.number().describe("ID của người trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await peopleTools.getPersonManga(id);
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
              text: `Lỗi khi lấy danh sách manga của người: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách hình ảnh của người
  server.tool(
    "getPersonPictures",
    "Lấy danh sách hình ảnh của người",
    {
      id: z.number().describe("ID của người trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await peopleTools.getPersonPictures(id);
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
              text: `Lỗi khi lấy danh sách hình ảnh của người: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Tìm kiếm người
  server.tool(
    "searchPeople",
    "Tìm kiếm người trên MyAnimeList",
    {
      q: z.string().describe("Từ khóa tìm kiếm"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
      order_by: z.enum(["mal_id", "name", "birthday", "favorites"]).optional().describe("Sắp xếp theo"),
      sort: z.enum(["desc", "asc"]).optional().describe("Thứ tự sắp xếp"),
    },
    async (params) => {
      try {
        const data = await peopleTools.searchPeople(params);
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
              text: `Lỗi khi tìm kiếm người: ${error.message}`,
            },
          ],
        };
      }
    }
  );

  // Lấy người ngẫu nhiên
  server.tool(
    "getRandomPerson",
    "Lấy thông tin về một người ngẫu nhiên",
    {},
    async () => {
      try {
        const data = await peopleTools.getRandomPerson();
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
              text: `Lỗi khi lấy người ngẫu nhiên: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
