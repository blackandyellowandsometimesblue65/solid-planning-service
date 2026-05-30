export default function handler(req, res) {
  const { squareFootage } = req.body || {};

  const mockDimensions = {
    squareFootage,
    foundation: {
      type: "Monolithic slab",
      thickness: "4 inches",
      beams: "12-inch deep grade beams around perimeter"
    },
    framing: {
      walls: "2x6 exterior, 2x4 interior",
      ceilingHeight: "9 feet standard",
      roofPitch: "8/12"
    },
    rooms: {
      livingRoom: "18x20",
      kitchen: "12x16",
      primaryBedroom: "14x16"
    },
    status: "Mock dimensions generated"
  };

  res.status(200).json(mockDimensions);
}
