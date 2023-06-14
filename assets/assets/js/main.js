const navMenu = document.getElementById('nav-menu'), 
    icnMenu = document.querySelector('.menu-icon');

icnMenu.addEventListener('click', () => {
 	if(icnMenu.classList.toggle('active')){
        navMenu.classList.add('show-menu');
    }else{
        navMenu.classList.remove('show-menu');
    }
});

var telInp = $('input[type="tel"]');
      
telInp.each(function(){
  $(this).mask("+7(999) 999-99-99");
});


var bgHeader = "bg-header";

function scrollHeader() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= 60 || window.pageYOffset >= 60) {
    document.getElementsByTagName("header")[0].classList.add(bgHeader);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(bgHeader);
  }
};

window.addEventListener('scroll', scrollHeader);

const scrollShow = document.getElementById('scroll-up');

function scrollUp() {
  if (window.scrollY >= 550) {
    scrollShow.classList.add('show-scroll');
  } else {
    scrollShow.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll("section[id]");

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })

};