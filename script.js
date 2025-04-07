

const hero = document.querySelector('.hero');
const main = document.querySelector('.main');
const splash = document.querySelector('.splash');
const food = document.querySelector('.food');
const foodbkg = document.querySelector('.food-bkg');
const foodbkg2 = document.querySelector('.food-bkg-2');

const heroSection = document.querySelector('section.hero');

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    hero.style.transform = `translateY(-${scrollY * 0.1}px)`;  
    main.style.transform = `translateY(-${scrollY * 0.5}px)`;  

    food.style.transform = `translateY(-${scrollY * 1}px)`;
    foodbkg.style.transform = `translateY(-${scrollY * 0.7}px)`;
    foodbkg2.style.transform = `translateY(-${scrollY * 0.7}px)`;
  });
});


document.addEventListener('DOMContentLoaded', function() {

  const threshold = hero.offsetTop + hero.clientHeight - 400;

  let hasAnimated = false;

  
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    console.log(scrollY);
    console.log(threshold);
    console.log((scrollY > threshold))
    if (!hasAnimated && scrollY > threshold) {
      splash.classList.add('animate-in');
      hasAnimated = true
    }
    if (hasAnimated) {
      splash.style.transform = `translateY(-${scrollY * 2}px)`; 
    }
  });
});