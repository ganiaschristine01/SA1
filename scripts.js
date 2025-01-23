const button = document.getElementById("colorChangeButton");
button.addEventListener("click", changeColor);

function changeColor() {
    const resume = document.querySelector(".resume");
    const color = "#ca699e"
    resume.style.backgroundColor = color;
}