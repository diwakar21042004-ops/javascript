
const button = document.getElementById("changeColorBtn");
const colorCode = document.getElementById("colorCode");

const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F39C12",
    "#9B59B6",
    "#1ABC9C",
    "#E74C3C",
    "#2C3E50",
    "#16A085",
    "#E67E22"
];

button.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    document.body.style.backgroundColor = randomColor;

    colorCode.textContent = randomColor;
});
