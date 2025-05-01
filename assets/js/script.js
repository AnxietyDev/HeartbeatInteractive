// Preloader handling
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
  
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500); // Match transition duration
  });

  // Mobile nav toggle
  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
  });