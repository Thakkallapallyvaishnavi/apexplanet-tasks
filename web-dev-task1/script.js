// Original Alert Button Function
function showMessage() {
    alert("Hello! This is a simple alert triggered by JavaScript.");
}

// Bonus 1: Change Background Color
function changeBackground() {
    document.body.style.backgroundColor = "#d4f0fc";
}

// Bonus 2: Change Heading Text
function changeHeading() {
    const newTitle = prompt("Enter a new heading:");
    if (newTitle) {
        document.querySelector("h1").innerText = newTitle;
    }
}
