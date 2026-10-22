// Karvaan Coffee — small bits of interactivity, nothing fancy.

// Mobile nav
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

// close the menu once a link is tapped, otherwise it just hangs there on mobile
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow after scrolling a bit
const header = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  header.classList.toggle('has-shadow', window.scrollY > 8);
}, { passive: true });

// FAQ accordion — only one open at a time
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');

  button.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');

    faqItems.forEach((other) => {
      other.classList.remove('is-open');
      other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      other.querySelector('.faq-a').style.maxHeight = null;
    });

    if (!wasOpen) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// Newsletter form — front-end validation only, there's no backend for this page
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('newsletterEmail');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  // good enough for a landing page check, not meant to be a full validator
  const looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!looksValid) {
    formMsg.textContent = 'Please enter a valid email address so we can send the code.';
    formMsg.className = 'form-msg is-error';
    emailInput.focus();
    return;
  }

  formMsg.textContent = `Thanks — your 10% code is on its way to ${email}.`;
  formMsg.className = 'form-msg is-success';
  form.reset();
});
