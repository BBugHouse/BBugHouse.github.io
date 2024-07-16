const btn = document.getElementById("btn");
const dark = document.getElementById("dark");
const darkImage = document.getElementById("darkImage");
const arrow = document.getElementById("arrow");
const container = document.getElementById("container");
const input = document.getElementById("input");
const image = document.getElementById("image");

container.style.height = `121px`;

let toggle_open = false;
let toggle_dark = false;

btn.addEventListener("click", () => {
  toggle_open = !toggle_open;
  arrow.src = `./imgs/icons/${!toggle_open ? "up" : "down"}.svg`;
  container.style.height = `${!toggle_open ? "121px" : "580px"}`;
});

dark.addEventListener("click", () => {
  toggle_dark = !toggle_dark;
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  darkImage.src = `./imgs/icons/${!toggle_dark ? "sun" : "night"}.svg`;
});

function change() {
  image.style = input.value;
}
