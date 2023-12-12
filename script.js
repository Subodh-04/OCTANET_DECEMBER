document.getElementById('myLinkleft').onclick = function(event) {
  event.preventDefault(); // Prevent the default behavior (page reload)
  scrollSlider(-1);
};

document.getElementById('myLinkright').onclick = function(event) {
  event.preventDefault(); // Prevent the default behavior (page reload)
  scrollSlider(1);
};

function scrollSlider(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const scrollAmount = 250; // Adjust as needed
  
    sliderContainer.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  