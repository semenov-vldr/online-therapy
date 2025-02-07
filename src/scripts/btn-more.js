const btnMore = document.querySelector(".btn-more");

if (btnMore) {
  const bibliographyItems = document.querySelectorAll(".article__bibliography-list li");

  btnMore.addEventListener("click", () => {
    bibliographyItems.forEach(item => item.classList.add("js-show-more"));
    btnMore.remove();
  });

}