// Active section

const navbar = document.querySelector("#navbar-list");
const allNavLinks = document.querySelectorAll(".nav-link");

navbar.addEventListener('click', (event) => {
  // Clear previously active nav item
  allNavLinks.forEach((link) => {
    link.setAttribute('class', 'nav-link');
    link.removeAttribute('aria-current');
  });
  // Set new active nav item
  const clicked = event.target.closest('a');
  clicked.setAttribute('class', 'nav-link active');
  clicked.setAttribute('aria-current', 'page');
  
});