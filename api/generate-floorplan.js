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
