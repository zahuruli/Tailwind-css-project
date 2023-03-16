let icon = document.querySelector("#navicon");
let menu = document.querySelector("#sitenav");

icon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
