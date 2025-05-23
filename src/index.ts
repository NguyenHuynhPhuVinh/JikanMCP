#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Import các công cụ từ các module
import * as animeTools from "./tools/anime.js";
import * as mangaTools from "./tools/manga.js";
import * as characterTools from "./tools/characters.js";
import * as peopleTools from "./tools/people.js";
import * as seasonTools from "./tools/seasons.js";
import * as scheduleTools from "./tools/schedules.js";
import * as genreTools from "./tools/genres.js";
import * as searchTools from "./tools/search.js";

// Tạo server instance JikanMCP
const server = new McpServer({
  name: "jikan-mcp",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// ANIME TOOLS

// Lấy thông tin về một anime cụ thể
server.tool(
  "getAnime",
  "Lấy thông tin về một anime cụ thể từ MyAnimeList",
  {
    id: z.number().describe("ID của anime trên MyAnimeList"),
  },
  async ({ id }) => {
    try {
      const data = await animeTools.getAnime(id);
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
            text: `Lỗi khi lấy thông tin anime: ${error.message}`,
          },
        ],
      };
    }
  }
);

// Tìm kiếm anime
server.tool(
  "searchAnime",
  "Tìm kiếm anime trên MyAnimeList",
  {
    q: z.string().describe("Từ khóa tìm kiếm"),
    page: z.number().optional().describe("Số trang (mặc định: 1)"),
    limit: z
      .number()
      .optional()
      .describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    type: z
      .enum(["tv", "movie", "ova", "special", "ona", "music"])
      .optional()
      .describe("Loại anime"),
    status: z
      .enum(["airing", "complete", "upcoming"])
      .optional()
      .describe("Trạng thái phát sóng"),
    rating: z
      .enum(["g", "pg", "pg13", "r17", "r", "rx"])
      .optional()
      .describe("Xếp hạng độ tuổi"),
    sfw: z
      .boolean()
      .optional()
      .describe("Lọc nội dung an toàn (không có nội dung 18+)"),
  },
  async (params) => {
    try {
      const data = await animeTools.searchAnime(params);
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
            text: `Lỗi khi tìm kiếm anime: ${error.message}`,
          },
        ],
      };
    }
  }
);

// MANGA TOOLS

// Lấy thông tin về một manga cụ thể
server.tool(
  "getManga",
  "Lấy thông tin về một manga cụ thể từ MyAnimeList",
  {
    id: z.number().describe("ID của manga trên MyAnimeList"),
  },
  async ({ id }) => {
    try {
      const data = await mangaTools.getManga(id);
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
            text: `Lỗi khi lấy thông tin manga: ${error.message}`,
          },
        ],
      };
    }
  }
);

// Tìm kiếm manga
server.tool(
  "searchManga",
  "Tìm kiếm manga trên MyAnimeList",
  {
    q: z.string().describe("Từ khóa tìm kiếm"),
    page: z.number().optional().describe("Số trang (mặc định: 1)"),
    limit: z
      .number()
      .optional()
      .describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    type: z
      .enum([
        "manga",
        "novel",
        "lightnovel",
        "oneshot",
        "doujin",
        "manhwa",
        "manhua",
      ])
      .optional()
      .describe("Loại manga"),
    status: z
      .enum(["publishing", "complete", "hiatus", "discontinued", "upcoming"])
      .optional()
      .describe("Trạng thái xuất bản"),
    sfw: z
      .boolean()
      .optional()
      .describe("Lọc nội dung an toàn (không có nội dung 18+)"),
  },
  async (params) => {
    try {
      const data = await mangaTools.searchManga(params);
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
            text: `Lỗi khi tìm kiếm manga: ${error.message}`,
          },
        ],
      };
    }
  }
);

// CHARACTER TOOLS

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

// SEASON TOOLS

// Lấy thông tin về mùa anime hiện tại
server.tool(
  "getCurrentSeason",
  "Lấy thông tin về mùa anime hiện tại",
  {
    page: z.number().optional().describe("Số trang (mặc định: 1)"),
    limit: z
      .number()
      .optional()
      .describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
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

// SCHEDULE TOOLS

// Lấy lịch phát sóng anime
server.tool(
  "getSchedules",
  "Lấy lịch phát sóng anime",
  {
    filter: z
      .enum([
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
        "unknown",
        "other",
      ])
      .optional()
      .describe("Lọc theo ngày trong tuần"),
    page: z.number().optional().describe("Số trang (mặc định: 1)"),
    limit: z
      .number()
      .optional()
      .describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
    kids: z.boolean().optional().describe("Lọc anime dành cho trẻ em"),
    sfw: z.boolean().optional().describe("Lọc nội dung an toàn"),
  },
  async ({ filter, page, limit, kids, sfw }) => {
    try {
      const data = await scheduleTools.getSchedules(
        filter,
        page,
        limit,
        kids,
        sfw
      );
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

// GENRE TOOLS

// Lấy danh sách thể loại anime
server.tool(
  "getAnimeGenres",
  "Lấy danh sách thể loại anime",
  {
    filter: z
      .enum(["genres", "explicit_genres", "themes", "demographics"])
      .optional()
      .describe("Lọc theo loại"),
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

// SEARCH TOOLS

// Tìm kiếm tổng hợp
server.tool(
  "search",
  "Tìm kiếm tổng hợp (anime, manga, nhân vật, người)",
  {
    query: z.string().describe("Từ khóa tìm kiếm"),
    type: z
      .enum(["anime", "manga", "character", "person"])
      .describe("Loại tìm kiếm"),
    page: z.number().optional().describe("Số trang (mặc định: 1)"),
    limit: z
      .number()
      .optional()
      .describe("Số lượng kết quả trên mỗi trang (mặc định: 25)"),
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

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("JikanMCP Server đang chạy trên stdio");
}

main().catch((error) => {
  console.error("Lỗi nghiêm trọng trong main():", error);
  process.exit(1);
});
