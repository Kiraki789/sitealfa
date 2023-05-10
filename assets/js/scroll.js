

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView( {
            behavior: "smooth",
            block: "start"
        })
    })
};

const scrollBtn = document.querySelector('.scroll-up');

window.onscroll = () => {
    if(window.scrollY > 700) {
        scrollBtn.classList.remove('scroll-up-active');
    } else {
        scrollBtn.classList.add('scroll-up-active');
    }
};

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
};