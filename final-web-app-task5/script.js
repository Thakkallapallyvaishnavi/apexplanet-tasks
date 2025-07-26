function fetchData() {
  console.log("Fetching data...");

  fetch("api/data.json")
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById("output");
      output.innerHTML = data.map(item => `<p>${item.name}</p>`).join("");
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("output").textContent = "Failed to load data.";
    });
}