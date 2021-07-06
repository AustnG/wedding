function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav-menu");
const menuItem = document.querySelectorAll(".nav-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
