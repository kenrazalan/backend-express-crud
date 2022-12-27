export const createInputSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
  },
  required: ["title"],
};

export const updateInputSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    status: { type: "boolean" },
    description: { type: "string" },
  },
};
