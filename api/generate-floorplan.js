export default function handler(req, res) {
  const { client, squareFootage, bedrooms, bathrooms, garage } = req.body || {};

  // Mock floorplan data (later replaced with real AI)
  const mockPlan = {
    client,
    squareFootage,
    bedrooms,
    bathrooms,
    garage,
    layout: "Open concept living, centered kitchen, split bedroom plan",
    rooms: [
      { name: "Living Room", size: "18x20" },
      { name: "Kitchen", size: "12x16" },
      { name: "Primary Bedroom", size: "14x16" },
      { name: "Bedroom 2", size: "11x12" },
      { name: "Bedroom 3", size: "11x12" }
    ],
    status: "Mock floorplan generated"
  };

  res.status(200).json(mockPlan);
}
import OpenAI from "openai";

const clientAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const { client, squareFootage, bedrooms, bathrooms, garage } = req.body || {};

    const prompt = `
      You are an architectural planning assistant.
      Create a detailed residential floorplan for a client.

      Requirements:
      - Client name: ${client}
      - Square footage: ${squareFootage}
      - Bedrooms: ${bedrooms}
      - Bathrooms: ${bathrooms}
      - Garage bays: ${garage}

      Return JSON ONLY in this exact structure:

      {
        "client": "",
        "squareFootage": "",
        "bedrooms": "",
        "bathrooms": "",
        "garage": "",
        "layout": "",
        "rooms": [
          { "name": "", "size": "" }
        ],
        "notes": ""
      }
    `;

    const aiResponse = await clientAI.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(aiResponse.choices[0].message.content);

    res.status(200).json(result);

  } catch (err) {
    console.error("Floorplan AI Error:", err);
    res.status(500).json({ error: "AI floorplan generation failed" });
  }
}
