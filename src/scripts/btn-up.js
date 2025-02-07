const goTopButton = document.querySelector('.btn-up');

if (goTopButton) {

  goTopButton.addEventListener('click', goTop);
  window.addEventListener('scroll', trackScroll);

  const body = document.body;
  body.appendChild(goTopButton);
  setTimeout(() => body.appendChild(goTopButton), 100);

  function goTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  };

  function trackScroll() {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    goTopButton.classList.toggle('js-visible', offset > coords / 3);
  };
}