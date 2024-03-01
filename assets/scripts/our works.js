// getting the show more button from our works 
var showMorebtn = document.getElementById('showMoreBtn');
var showMoreico = document.getElementById('showMoreico');

// getting the scrolling projects sample scroll bar
var scrollLeft = document.getElementById("scrollLeft");
var scrolRight = document.getElementById("scrollRight");
var scrollSample = document.querySelector(".mini-slider");


// applying animation to the collapsable button icon 
showMorebtn.addEventListener('click', function()
{
    showMoreico.classList.toggle("show-btn-arrow-animation");
});

scrollLeft.addEventListener("click", function()
{
    scrollSample.scrollLeft += 200;
});

scrollRight.addEventListener("click", function()
{
    scrollSample.scrollLeft += -200;
});