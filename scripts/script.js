
var navBarIcon = document.getElementById("nav__bar__icon");
var overlay =  document.getElementById("overlay");

navBarIcon.addEventListener("click" , function()
{
  document.getElementById("nav-bar-mobile").classList.add("mobile__menu--active");
  overlay.style.display = "block";

})
overlay.addEventListener("click" , function()
{
  document.getElementById("nav-bar-mobile").classList.remove("mobile__menu--active");
  overlay.style.display = "none";
})
var languageSelect = document.getElementById("language-select");
window.addEventListener("click" , (e)=>
{
  var country = document.getElementById("language-select-country");
  var countryIcon = document.getElementById("language-select-icon");
  if(e.target !=  country && e.target != countryIcon )
  {
    document.getElementById("language-dropdown").classList.remove("active__language");
  }
})

languageSelect.addEventListener("click" , function()
{
  document.getElementById("language-dropdown").classList.add("active__language");
})
function activeMenu(id)
{

  var menuItem = document.getElementById(id);
  menuItem.classList.add("active");
}
function removeMenu()
{
  var menuItemRemove = document.getElementsByClassName("nav__items__link");
  for (let i=0;i<menuItemRemove.length;i++)
  {
    menuItemRemove[i].classList.remove("active");
  }
}

function checkScrollView(id , space)
{
  var element = document.querySelector(id);
	var position = element.getBoundingClientRect();
	if(position.top+space < window.innerHeight && position.bottom >= 0) {
	return true;
	}
}


window.addEventListener('scroll', function() {
  removeMenu();

  var navbar =document.getElementById("navbar");
  if(window.scrollY>250)
  {
    navbar.classList.add("scroll--fixed");
  }
  else
  {
    navbar.classList.remove("scroll--fixed");
  }
  if ((window.innerHeight + window.scrollY +2) >= document.body.offsetHeight) {
    removeMenu();
    activeMenu("menu-contact");
  }
  else if(checkScrollView('#benefits' , 1000)==true)
  {
    removeMenu();
    activeMenu("menu-benefits");
  }
  else if(checkScrollView('#feature',1000)==true)
  {
    removeMenu();
    activeMenu("menu-feature");
  }
  else if(checkScrollView('#introduce' ,0)==true)
  {
    removeMenu();
    activeMenu("menu-introduce");
  }
  else if(checkScrollView('#carosel' ,0)==true)
  {
    removeMenu();
    activeMenu("menu-introduce");
  }
});

windowsize = $(window).width();
if(windowsize<800)
{
  $('.wow').removeClass('wow');
}
new WOW().init();
$('.slide--center').slick({
    centerMode: true,
    centerPadding: 'px',
    slidesToShow: 3,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
});