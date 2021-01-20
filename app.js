var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
})

var divs = [
    " We provide you digital solutions for your business, by creating user friendly websites and also, adding features on your existing websites.",
    "Content Writing text here",
    "App dev text here."
] 

var images = ["images used/webdev.JPG",
            "images used/comtentwriting.JPG",
            "images used/anddev.JPG"]

var headings=["Web Development","Content Writing","App development"]

let i=0;

function slides(){
    document.querySelector(".image").src = images[i]
    document.querySelector(".desc").innerText = divs[i];
    document.querySelector(".heading").innerText = headings[i];
    
    // console.log(images[i])
    // console.log(divs[i])


    if (i<divs.length-1){
        i++
    }else{
        i=0;
    }
}

setInterval (slides, 2000);