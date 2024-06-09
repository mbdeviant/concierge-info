const data = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("/data");
    const fetchedData = await res.json();

    fetchedData.forEach((item) => {
      data.push(item);
    });
  } catch {
    console.error("error fetching data", error);
  }
  appendData();
});

function appendData() {
  const root = document.getElementById("root");

  for (const key in data) {
    const tourItem = document.createElement("div");

    const itemTitle = document.createElement("h2");
    itemTitle.textContent = data[key].title;

    const descriptions = document.createElement("ul");

    for (const description of data[key].description) {
      const descItem = document.createElement("li");
      descItem.textContent = description;
      descriptions.appendChild(descItem);
    }

    tourItem.appendChild(itemTitle);
    tourItem.appendChild(descriptions);
    root.appendChild(tourItem);
  }
}
