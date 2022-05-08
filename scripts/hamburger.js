menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  menu.previousElementSibling.classList.toggle('open');
});
