window.addEventListener('scroll', () => {
  const element = document.querySelector('.img-container');
  const position = element.getBoundingClientRect();

  const isVisible = position.top < window.innerHeight && position.bottom > 0;

  if (isVisible) {
    element.classList.add('show-img');
  } else {
    element.classList.remove('show-img');
  }
});