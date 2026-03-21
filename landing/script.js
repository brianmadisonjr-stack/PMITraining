const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('header nav');
const yearSpan = document.getElementById('year');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', expanded);
  });
}

if (navMenu) {
  const style = document.createElement('style');
  style.innerHTML = `header nav.open { display: flex; flex-direction: column; position: absolute; right: 1rem; top: 4.5rem; background: rgba(5, 11, 26, 0.95); padding: 1.5rem; border-radius: 16px; box-shadow: 0 20px 40px rgba(5, 11, 26, 0.5); }
  header nav.open a { margin: 0.5rem 0; }`;
  document.head.appendChild(style);
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Submit this form via your Hostinger form handler or connect it to your CRM.');
  });
}
