
// document.addEventListener('DOMContentLoaded', function() {
//   const hero = document.querySelector('.hero');
//   const main = document.querySelector('.main');
//   const heroHeight = hero.offsetHeight;

//   window.addEventListener('scroll', function() {
//     // Clamp the scroll value to the height of the hero
//     const scrollY = Math.min(window.scrollY, heroHeight);
//     // Translate the main section upward as the user scrolls
//     main.style.transform = `translateY(-${scrollY}px)`;
//   });
// });




document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  const main = document.querySelector('.main');
  const splash = document.querySelector('.splash');
  
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Adjust these multipliers to change the parallax speeds
    hero.style.transform = `translateY(-${scrollY * 0.1}px)`;  // Slowest movement
    main.style.transform = `translateY(-${scrollY * 0.3}px)`;  // Medium movement
    splash.style.transform = `translateY(-${scrollY * 0.8}px)`; // Fastest movement
  });
});







// document.addEventListener('DOMContentLoaded', function () {
//   const hero = document.querySelector('.hero');
//   const main = document.querySelector('.main');
//   const heroHeight = hero.offsetHeight;

//   window.addEventListener('scroll', function() {
//     // Ensure scroll value does not exceed hero's height
//     const scrollY = Math.min(window.scrollY, heroHeight);
//     // Calculate the translateY value:
//     // At scrollY = 0, translateY = -heroHeight (main is below hero)
//     // At scrollY = heroHeight, translateY = 0 (main in its final position overlapping hero)
//     main.style.transform = `translateY(${ -heroHeight + scrollY }px)`;
//   });
// });





















// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Website loaded and script running!');
//   });

// function updateSvgSource() {
//   // Get the inline SVG element by its ID.
//   const svgElement = document.getElementById('Layer_1');
//   if (!svgElement) return; // Exit if not found.

//   // Find the <image> element inside the SVG.
// //  const imageElement = svgElement.querySelector('image');
// //  if (!imageElement) return; // Exit if there's no image element.

//   // Check the viewport width and update the source accordingly.
//   if (window.innerWidth > 600) {
//     // Change to the larger version for viewports over 600px.
//     svgElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './assets/nav-bar-v1.3.svg');
//   } else {
//     // Optionally revert to the original source if the viewport is 600px or less.
//     svgElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './assets/nav-bar-v1.3-small.svg');
//   }
// }

// // Run the function when the DOM is loaded and on every window resize.
// document.addEventListener('DOMContentLoaded', updateSvgSource);
// window.addEventListener('resize', updateSvgSource);