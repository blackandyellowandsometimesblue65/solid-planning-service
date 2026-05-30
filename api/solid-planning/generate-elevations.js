export default function handler(req, res) {
  const { client, style } = req.body || {};

  const mockElevations = {
    client,
    style: style || "Modern Farmhouse",
    front: "Front elevation with gable roof, board & batten siding, black windows",
    rear: "Rear elevation with covered porch and sliding glass doors",
    left: "Left elevation with garage bump-out",
    right: "Right elevation with utility access",
    status: "Mock elevations generated"
  };

  res.status(200).json(mockElevations);
}
