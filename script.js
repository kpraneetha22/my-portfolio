/* Smooth scroll */
document.querySelectorAll('nav a').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  };
});

/* Dark mode */
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('dark');
};

/* Scroll animation */
const reveals = document.querySelectorAll('.reveal-on-scroll');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

/* Lightbox */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.lightbox-img').forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  };
});

lightbox.onclick = () => {
  lightbox.style.display = 'none';
};
