const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// trigger dropdown menu toggling show/hide
const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
}

// call the toggleDropdown function above when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e){
    e.stopPropagation();
    toggleDropdown();
});

// function calls the toggleDropdown() function when the HTML document outside the opened dropdown menu is clicked
document.documentElement.addEventListener("click", function () {
    if(dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
});