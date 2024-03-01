var langPC = document.getElementById('languageButtonPC');
var langPhone = document.getElementById('languageButtonPhone');

var languageOptionsPC = document.getElementById("languageOptionsPC");
var languageOptionsPhone = document.getElementById("languageOptionsPhone");


if(window.innerWidth <= 900)
{
    langPhone.classList.add("lang-btn-phone");
} else if (window.innerWidth >= 900)
{
    langPC.classList.add("lang-btn-pc");
}
langPC.addEventListener("click", function() {
    langPC.classList.toggle("language-btn-clicked");
    languageOptionsPC.classList.toggle("lang-pop-up");
    languageOptionsPC.classList.toggle("lang-icon-visibility");
});

langPhone.addEventListener("click", function()
{
    languageOptionsPhone.classList.toggle("lang-icon-visibility");
});