document.getElementById("buildBtn").addEventListener("click", async () => {
  const client = document.getElementById("clientName").value;
  const sqft = document.getElementById("squareFootage").value;
  const beds = document.getElementById("bedrooms").value;
  const baths = document.getElementById("bathrooms").value;
  const garage = document.getElementById("garageBays").value;

  const floorplanBox = document.getElementById("floorplanOutput");
  const techBox = document.getElementById("techSpecOutput");

  // Reset UI
  floorplanBox.innerText = "Starting build…";
  techBox.innerText = "";

  // Helper to update UI between steps
  const step = async (label, fn) => {
    floorplanBox.innerText = label;
    return await fn();
  };

  try {
    // 1. FLOORPLAN
    const floorplan = await step("Generating floorplan…", async () => {
      const res = await fetch("/api/generate-floorplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client, sqft, beds, baths, garage })
      });
      return await res.json();
    });

    // 2. DIMENSIONS
    const dimensions = await step("Generating dimensions…", async () => {
      const res = await fetch("/api/generate-dimensions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client, sqft })
      });
      return await res.json();
    });

    // 3. ELEVATIONS
    const elevations = await step("Generating elevations…", async () => {
      const res = await fetch("/api/generate-elevations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client })
      });
      return await res.json();
    });

    // 4. MATERIALS
    const materials = await step("Generating materials…", async () => {
      const res = await fetch("/api/generate-materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client })
      });
      return await res.json();
    });

    // 5. RENDER PHOTO
    const render = await step("Rendering photo…", async () => {
      const res = await fetch("/api/render-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client })
      });
      return await res.json();
    });

    // DONE
    floorplanBox.innerText = "Build complete.";

    techBox.innerText = JSON.stringify(
      {
        floorplan,
        dimensions,
        elevations,
        materials,
        render
      },
      null,
      2
    );

  } catch (err) {
    floorplanBox.innerText = "Error during build.";
    techBox.innerText = err.toString();
  }
});
