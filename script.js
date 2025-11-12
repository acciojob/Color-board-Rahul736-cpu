const container = document.getElementById("container");
const boxCount = 800;

for (let i = 0; i < boxCount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
}

function removeColor(element) {
    setTimeout(() => {
        element.style.background = "#1d1d1d";
    }, 1000); 
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`; 
}
