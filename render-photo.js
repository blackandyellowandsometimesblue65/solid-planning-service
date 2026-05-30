export default function handler(req, res) {
  const { style } = req.body || {};

  const mockImage = {
    style: style || "Modern Farmhouse",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Mock+Rendering",
    description: "Mock rendering placeholder image",
    status: "Mock rendering generated"
  };

  res.status(200).json(mockImage);
}
