const menu = document.querySelector(".menu-content");
const dropdown = document.querySelector(".menu-dropdown");
const toggleDropdown = document.querySelector(".dropdown");
const company = document.querySelector(".company-content");
const com = document.querySelector(".company");

menu.style.visibility = "hidden";
company.style.visibility = "hidden";

toggleDropdown.addEventListener("click", (event) => {
  if (menu.style.visibility == "hidden") {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }

  event.preventDefault();
});

com.addEventListener("click", () => {
  if (company.style.visibility == "hidden") {
    company.style.visibility = "visible";
  } else {
    company.style.visibility = "hidden";
  }
});
