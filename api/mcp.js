const { createServer } = require("@modelcontextprotocol/sdk");

const handler = createServer({
  tools: [
    {
      name: "get_transcript",
      description: "Fetch transcript from a YouTube video.",
      parameters: {
        type: "object",
        properties: {
          url: {
            type: "string",
            description: "The full YouTube video URL."
          }
        },
        required: ["url"]
      },
      execute: async ({ url }) => {
        const transcript = `This is a test transcript for: ${url}`;
        return { transcript };
      }
    }
  ]
});

module.exports = handler;
