// ===== Theme Toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme) document.documentElement.classList.toggle('light', storedTheme === 'light');

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ===== Mobile Nav =====
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close menu on link click (mobile)
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (menu.classList.contains('open')) menu.classList.remove('open');
}));

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Year & Back to top =====
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Contact form (demo) =====
function handleSubmit(form){
  const status = document.getElementById('formStatus');
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Form data:', data); // replace with your API call
  status.textContent = 'Thanks! I'll get back to you soon.';
  form.reset();
}
