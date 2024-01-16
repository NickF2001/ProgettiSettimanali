function changeColor() {
    var header = document.getElementById('header');
    var button = document.querySelector('.headerBtn');

    header.style.backgroundColor = 'white';

    button.style.backgroundColor = 'green';
    button.style.color = '#191919';
  }

  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var button = document.querySelector('.headerBtn');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= window.innerHeight / 2) {
      changeColor();
    } else {
      header.style.backgroundColor = '#ffc017';
      button.style.backgroundColor = '#191919';
      button.style.color = 'white';
    }
  });