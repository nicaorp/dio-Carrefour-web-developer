const btn = document.querySelector("button");
const body = document.querySelector("body");


btn.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme") ? btn.innerHTML = "Light Mode" : btn.innerHTML = "Dark Mode");
        

});



