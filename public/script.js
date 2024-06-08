const data = [];

document.addEventListener("DOMContentLoaded", async () => {
  console.log("dom content parsed and loaded successfully");
  try {
    const res = await fetch("/data");
    const fetchedData = await res.json();

    fetchedData.forEach((item) => {
      data.push(item);
    });
  } catch {
    console.error("error fetching data", error);
  }
});

function log() {
  console.log("Initial data:", data);
  console.log(data[0].description[1]);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
