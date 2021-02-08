const preview = document.querySelector('#btn-left')
const next = document.querySelector('#btn-right')
const slider = document.querySelector('.slider-wrapper')
const navToggler = document.querySelector('.nav-menu')
const navMobile = document.querySelector('.nav-mobile')
const carousel = document.querySelector('.carousel-wrapper')
const scrollBall = document.querySelector('.ball')
const navbar = document.querySelector('.navbar')
const projet = document.querySelector('.projet')

let direction = -1;

let interval = 4000;
let  slide;
sliding(interval)

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-20%)';  
  clearInterval(slide)
  interval = 4000;
  sliding(interval)
  return
});

preview.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';    
  slider.style.transform = 'translate(20%)';  
  clearInterval(slide)
  interval = 4000;
  sliding(interval)
  return
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 1s';
  })
}, false);

slider.addEventListener('mouseenter', ()=>{
  clearInterval(slide)
})
slider.addEventListener('mouseleave', ()=>{
  sliding(interval)
})

function sliding (int) {
 slide = setInterval(() => {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)'; 
  }, int);
} 

// TOGGLE MENU ON MOBILE

navToggler.addEventListener('click', function(){
  this.classList.toggle('croix')
  navMobile.style.left === "0px" ? navMobile.style.left = "100%" : navMobile.style.left = "0px";
  // navMobile.style.display === "flex" ? navMobile.style.display = "none" : navMobile.style.display = "flex";
})

navMobile.querySelectorAll('ul li a').forEach(ele =>{
  ele.addEventListener('click', function() {
    navMobile.querySelectorAll('ul li a').forEach(ele =>{ele.classList.remove('active')})
    this.classList.add('active')
    navToggler.classList.toggle('croix')
    navMobile.style.left = "100%"
    // navMobile.style.display = "none" 
  })
})

let anim= scrollBall.animate([
  {top: '20px',opacity: 0}
],
{
  duration: 1000,
  iterations: Infinity
})

window.addEventListener('scroll', (e)=>{
  if(window.scrollY > 50){
    anim.pause()
    scrollBall.parentNode.style.display= "none"
  }
  else{
    scrollBall.parentNode.style.display= "block"
    anim.play()
  }

  if(scrollY > window.innerHeight - 100){
    navbar.style.backgroundColor = "#444444ee"
    navbar.style.boxShadow = "0 0 5px #444444"
  }else{
    navbar.style.backgroundColor = "unset"
    navbar.style.boxShadow = "none"
  }
})