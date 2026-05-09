AOS.init({
  once: true,
  duration: 1000,
  //offset: 120
});

const footerCopyright = document.querySelector("footer .footer__copyright");
if (footerCopyright) {
  footerCopyright.textContent = `© ${new Date().getFullYear()}`
}