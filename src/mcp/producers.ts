import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as producerTools from "../tools/producers.js";

/**
 * Đăng ký các công cụ MCP liên quan đến nhà sản xuất
 * @param server Instance của McpServer
 */
export function registerProducerTools(server: McpServer) {
  // Lấy thông tin về một nhà sản xuất cụ thể
  server.tool(
    "getProducer",
    "Lấy thông tin về một nhà sản xuất cụ thể từ MyAnimeList",
    {
      id: z.number().describe("ID của nhà sản xuất trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await producerTools.getProducer(id);
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
              text: `Lỗi khi lấy thông tin nhà sản xuất: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy danh sách anime của nhà sản xuất
  server.tool(
    "getProducerAnime",
    "Lấy danh sách anime của nhà sản xuất từ MyAnimeList",
    {
      id: z.number().describe("ID của nhà sản xuất trên MyAnimeList"),
      page: z.number().optional().describe("Số trang (mặc định: 1)"),
      limit: z.number().optional().describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    },
    async ({ id, page, limit }) => {
      try {
        const data = await producerTools.getProducerAnime(id, page, limit);
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
              text: `Lỗi khi lấy danh sách anime của nhà sản xuất: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin đầy đủ về nhà sản xuất
  server.tool(
    "getProducerFull",
    "Lấy thông tin đầy đủ về nhà sản xuất từ MyAnimeList",
    {
      id: z.number().describe("ID của nhà sản xuất trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await producerTools.getProducerFull(id);
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
              text: `Lỗi khi lấy thông tin đầy đủ về nhà sản xuất: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );

  // Lấy thông tin bên ngoài của nhà sản xuất
  server.tool(
    "getProducerExternal",
    "Lấy thông tin bên ngoài của nhà sản xuất từ MyAnimeList",
    {
      id: z.number().describe("ID của nhà sản xuất trên MyAnimeList"),
    },
    async ({ id }) => {
      try {
        const data = await producerTools.getProducerExternal(id);
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
              text: `Lỗi khi lấy thông tin bên ngoài của nhà sản xuất: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );
}
