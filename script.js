const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.getElementById("themeDiv").className = themeName;
};
const changeTheme = () => {
  if (localStorage.getItem("theme") === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};
(() => {
  if (localStorage.getItem("theme") === "light") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
})();

let button = document.getElementById('navBtn');
let icon =  document.getElementById('icon');
let nav = document.querySelector(".nav-items");

button.addEventListener("click", ()=>{
  icon.classList.toggle('close');
  nav.classList.toggle('nav-close');
  nav.classList.add("close-trans");
})