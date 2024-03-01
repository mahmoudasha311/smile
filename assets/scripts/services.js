// getting all services boxes
var serviceBox = document.querySelectorAll('.service-box');


// for each box, apply new style
serviceBox.forEach(box => 
{
    // when the mouse is on the box
    box.addEventListener('mouseover', function()
    { 
        // change the text color of the current hoverd box
        box.children[1].classList.add("service-text-hover");
    });

    // when the mouse leave the box
    box.addEventListener('mouseout', function()
    {
        // change the text color to the default state 
        box.children[1].classList.remove("service-text-hover");
    });
});





