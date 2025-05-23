#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Tạo server instance JikanMCP
const server = new McpServer({
  name: "jikan-mcp",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Đăng ký tool chào mừng JikanMCP
server.tool("hello", "Trả về lời chào từ JikanMCP", {}, async () => {
  return {
    content: [
      {
        type: "text",
        text: "Xin chào từ JikanMCP!",
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("JikanMCP Server đang chạy trên stdio");
}

main().catch((error) => {
  console.error("Lỗi nghiêm trọng trong main():", error);
  process.exit(1);
});
