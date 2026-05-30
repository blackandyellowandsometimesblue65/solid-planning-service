export default function handler(req, res) {
  const { style } = req.body || {};

  const mockMaterials = {
    style: style || "Modern Farmhouse",
    exterior: {
      siding: "Board & batten fiber cement",
      trim: "PVC white trim boards",
      roofing: "30-year architectural shingles, black",
      windows: "Black vinyl, double-pane, low-E",
      doors: "Fiberglass front door, black finish"
    },
    interior: {
      flooring: "LVP wide-plank, natural oak",
      walls: "Drywall, smooth finish, Sherwin Williams Alabaster",
      cabinets: "Shaker style, white",
      counters: "Quartz, Calacatta pattern",
      hardware: "Matte black"
    },
    status: "Mock materials generated"
  };

  res.status(200).json(mockMaterials);
}
