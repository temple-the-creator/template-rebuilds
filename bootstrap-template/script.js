window.addEventListener('scroll', () => {
  const element = document.querySelector('.box');
  const position = element.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    element.classList.add('show');
  }
});