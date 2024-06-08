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

