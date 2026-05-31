export default function handler(req, res) {
  const { client, squareFootage, bedrooms, bathrooms, garage } = req.body || {};

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
