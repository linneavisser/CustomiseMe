document.querySelector("#menu").addEventListener("click", menu);

function menu() {
  console.log("Menu");
  let menu = document.querySelector(".menuContent");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    document.querySelector("#menu").textContent = "Menu";
  } else {
    menu.style.display = "block";
    document.querySelector("#menu").textContent = "Close";
  }
}
