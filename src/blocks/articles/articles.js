const articles = document.querySelector(".articles");
if (articles) {

  const cardsPerPage = 4;

  const articlesNav = articles.querySelector(".articles__nav");
  const prevButton = articlesNav.querySelector(".articles__nav-prev");
  const nextButton = articlesNav.querySelector(".articles__nav-next");
  const pageLinks = articlesNav.querySelectorAll(".articles__nav-item");
  const cards = Array.from(articles.querySelectorAll(".articles__item"));

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;

  function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index) => {
      card.classList.toggle("active", index >= startIndex && index < endIndex);
    });
  };


  function updatePagination() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageLinks.forEach(link => {
      const page = parseInt(link.getAttribute('data-page'));
      link.classList.toggle('active', page === currentPage);
    });
    document.getElementById("articles-top").scrollIntoView();
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
      updatePagination();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
      updatePagination();
    }
  });


  pageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = parseInt(link.getAttribute('data-page'));
      if (page !== currentPage) {
        currentPage = page;
        displayPage(currentPage);
        updatePagination();
      }
    });
  });

  displayPage(currentPage);
  updatePagination();

}