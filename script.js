const select = document.querySelector("select");
const body = document.querySelector("body");
const header = document.querySelector(".header");

document.querySelector("select").addEventListener("change", () => {
  console.log("test");
  body.setAttribute("data-theme", select.value);
});
