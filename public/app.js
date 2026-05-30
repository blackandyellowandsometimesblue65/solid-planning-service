document.getElementById("btnFullBuild").addEventListener("click", () => {
  const name = document.getElementById("clientName").value;
  const sqft = document.getElementById("squareFootage").value;

  document.getElementById("floorplanPreview").innerHTML =
    `<div style="padding:20px;color:#f2c94c;">Mock floorplan for ${name}</div>`;

  document.getElementById("specOutput").textContent = JSON.stringify(
    {
      client: name,
      squareFootage: sqft,
      status: "Mock output working"
    },
    null,
    2
  );
});
