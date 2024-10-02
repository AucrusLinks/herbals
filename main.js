
const header = document.querySelector("header")



window.addEventListener("scroll",function(){
    header.classList.toggle( "sticky" , window.scrollY > 0);
});


var menu = document.querySelector("#menu-icon");
var navber = document.querySelector(".nav-bar");

function toggle(){
    menu.classList.toggle("bx-x");
    navber.classList.toggle('open');
}

