document.getElementById("buildBtn").addEventListener("click", async () => {
  const client = document.getElementById("clientName").value;
  const sqft = document.getElementById("squareFootage").value;
  const beds = document.getElementById("bedrooms").value;
  const baths = document.getElementById("bathrooms").value;
  const garage = document.getElementById("garageBays").value;

  // Loading states
  document.getElementById("floorplanOutput").innerText = "Generating...";
  document.getElementById("techSpecOutput").innerText = "Generating...";

  // Mock backend call (replace with real API later)
  const mock = {
    client,
    squareFootage: sqft,
    bedrooms: beds,
    bathrooms: baths,
    garageBays: garage,
    status: "Mock output working"
  };

  document.getElementById("floorplanOutput").innerText =
    `Mock floorplan for ${client}`;

  document.getElementById("techSpecOutput").innerText =
    JSON.stringify(mock, null, 2);
});
