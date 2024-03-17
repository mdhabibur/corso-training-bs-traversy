document.addEventListener("DOMContentLoaded", function(){
    // const takewaySection = document.getElementById("footer");
    // takewaySection.scrollIntoView();


    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        
        if(window.scrollY > 20){
            navbar.classList.add("navbar-scrolled");
        }else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
});