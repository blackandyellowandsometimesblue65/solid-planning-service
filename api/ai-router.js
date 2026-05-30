
export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Solid Planning Service API is running",
    routes: [
      "generate-floorplan",
      "generate-elevations",
      "generate-materials",
      "generate-dimensions",
      "render-photo"
    ]
  });
}
