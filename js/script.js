/* ============================================
   IATL — shared site scripts
   ============================================ */

// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Dynamic footer year
document.querySelectorAll('.current-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Dynamic active nav link — matches the current page filename
const path = location.pathname;
let currentFile = path.split('/').pop() || 'index.html';
if (path.includes('/blog/')) {
  currentFile = 'blog.html';
}
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkFile = link.getAttribute('href').split('/').pop();
  link.classList.toggle('active', linkFile === currentFile);
});

// Team card accordion — toggle open/closed with aria-expanded
document.querySelectorAll('.team-card-header').forEach(header => {
  header.addEventListener('click', function () {
    const card = this.closest('.team-card');
    const isOpen = card.classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen);
  });
});
