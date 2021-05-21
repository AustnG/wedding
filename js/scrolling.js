window.onscroll = function () {
  scrollFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var mybutton = document.getElementById("bttBtn");

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
