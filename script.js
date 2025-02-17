// toggle icon navber//
let menuIcon =document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuIcon.onclick=() =>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active')

}
// scroll section//
let sections =document.querySelectorAll('section');
let navLinks =document.querySelector('header navba');

window.onscroll =() =>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
         navLinks.forEach(links => {
        links.classList.remove('active');
document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    //navber//
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100)
     //remove toggle//
     menuIcon.classList.remove('fa-xmark');
     navber.classList.remove('active');

};
//scroll reveal//
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay :200,
});
ScrollReveal().reveal('.home-content,.heading',{ origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.profile-box,.contact form',{ origin:'button'});
ScrollReveal().reveal('.home-contact h1,.about-img',{ origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{ origin:'right'});



