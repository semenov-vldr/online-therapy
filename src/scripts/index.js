// Очистить тествоый код

const buttonsHidden = document.querySelectorAll(".button-hidden");
if (buttonsHidden) {

  buttonsHidden.forEach((btn, index) => {
    const dataClass = btn.dataset.class;
    const block = document.querySelector(`.${dataClass}`);
    btn.textContent = `Скрыть блок ${index + 1}`;
    btn.addEventListener("click", () => {
      if (block) {
        block.classList.toggle("hidden");
        const isActive = block.classList.contains("hidden");
        btn.textContent = `${isActive ? "Показать" : "Скрыть"} блок ${index + 1}`;
      }
    });
  });
}