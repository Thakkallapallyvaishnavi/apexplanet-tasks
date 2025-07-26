const products = [
  { name: "Phone", category: "Electronics", price: 999, rating: 4.5 },
  { name: "Shoes", category: "Fashion", price: 120, rating: 4.2 },
];

function render() {
  const search = document.getElementById("search").value.toLowerCase();
  const container = document.getElementById("container");
  container.innerHTML = "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(search));
  const sorted = filtered.sort((a, b) => b.rating - a.rating);

  sorted.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong><br>₹${p.price} | ⭐ ${p.rating}`;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", render);