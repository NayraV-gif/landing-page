// Animaciones al hacer scroll
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// 🌙 Modo oscuro
const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});
