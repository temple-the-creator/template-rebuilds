window.addEventListener('scroll', () => {
  const element = document.querySelector('.img-container');
  const position = element.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    element.classList.add('show');
  }
});