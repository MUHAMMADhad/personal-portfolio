const toggleBtn = document.getElementById("menu-toggle");
const navWrapper = document.getElementById("nav-wrapper");

toggleBtn.addEventListener('click', () =>{
    navWrapper.classList.toggle("active");
    toggleBtn.textContent = navWrapper.classList.contains("active") ? "✖" : "☰";
});