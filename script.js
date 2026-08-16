const mobileProfile = document.getElementById("mobileProfile");
const aside = document.querySelector("aside");

mobileProfile.addEventListener("click", function() {
    aside.classList.toggle("active");
});