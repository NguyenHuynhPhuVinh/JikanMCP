#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Import các module đăng ký công cụ MCP
import { registerAnimeTools } from "./mcp/anime.js";
import { registerMangaTools } from "./mcp/manga.js";
import { registerCharacterTools } from "./mcp/characters.js";
import { registerPeopleTools } from "./mcp/people.js";
import { registerSeasonTools } from "./mcp/seasons.js";
import { registerScheduleTools } from "./mcp/schedules.js";
import { registerGenreTools } from "./mcp/genres.js";
import { registerSearchTools } from "./mcp/search.js";
import { registerTopTools } from "./mcp/top.js";
import { registerClubTools } from "./mcp/clubs.js";
import { registerProducerTools } from "./mcp/producers.js";
import { registerReviewTools } from "./mcp/reviews.js";
import { registerWatchTools } from "./mcp/watch.js";

// Tạo server instance JikanMCP
const server = new McpServer({
  name: "jikan-mcp",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Đăng ký tool giới thiệu JikanMCP
server.tool(
  "introduction",
  "Giới thiệu về JikanMCP và tác giả",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "JikanMCP là MCP server không chính thức cho Jikan API (MyAnimeList). Dự án được phát triển bởi TomiSakae, cung cấp khả năng truy cập dữ liệu anime, manga và nhiều thông tin liên quan khác thông qua giao thức Model Context Protocol (MCP).",
        },
      ],
    };
  }
);

// Đăng ký các công cụ MCP
registerAnimeTools(server);
registerMangaTools(server);
registerCharacterTools(server);
registerPeopleTools(server);
registerSeasonTools(server);
registerScheduleTools(server);
registerGenreTools(server);
registerSearchTools(server);
registerTopTools(server);
registerClubTools(server);
registerProducerTools(server);
registerReviewTools(server);
registerWatchTools(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("JikanMCP Server đang chạy trên stdio");
}

main().catch((error) => {
  console.error("Lỗi nghiêm trọng trong main():", error);
  process.exit(1);
});
