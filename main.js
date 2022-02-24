const mobile = document.getElementById('mobile');
const nav = document.getElementById('nav');

// add event for mobile menu
mobile.addEventListener('click',function(){
   nav.classList.toggle('toggle');
})