const preview = document.querySelector('#btn-left')
const next = document.querySelector('#btn-right')
const slider = document.querySelector('.slider-wrapper')
const navMobile = document.querySelector('.nav-mobile')
const carousel = document.querySelector('.carousel-wrapper')

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
    slider.style.transition = 'all 0.5s';
  })
}, false);

slider.addEventListener('mouseenter', ()=>{
  clearInterval(slide)
  sliding(interval)
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

document.querySelector('.nav-menu').addEventListener('click', function(){
  this.classList.toggle('croix')
  navMobile.style.left === "0px" ? navMobile.style.left = "100%" : navMobile.style.left = "0px";
  navMobile.style.display === "flex" ? navMobile.style.display = "none" : navMobile.style.display = "flex";
})
