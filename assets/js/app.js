// NAV TOGGLE
const toggler = document.querySelector('.toggler');
const navLinks = document.getElementById('nav-links');
toggler?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggler.setAttribute('aria-expanded', open);
});

// NAV SHADOW ON SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('shadow-sm', window.scrollY > 10);
});

// COUNTER ANIMATE (respects prefers-reduced-motion)
const counters = document.querySelectorAll('.counter');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const runCounter = (el) => {
    const target = +el.dataset.target;
    const increment = target / 200;
    let current = 0;
    const update = () => {
      if (current < target) {
        current += increment;
        el.textContent = Math.ceil(current).toLocaleString();
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString();
      }
    };
    update();
  };
  const io = new IntersectionObserver((entries, ob) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        ob.unobserve(entry.target);
      }
    });
  });
  counters.forEach((c) => io.observe(c));
} else {
  counters.forEach((c) => (c.textContent = c.dataset.target));
}

// FADE-UP ON SCROLL
const fadeUp = document.querySelectorAll('.fade-up');
const fadeIo = new IntersectionObserver(
  (entries, ob) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        ob.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
fadeUp.forEach((el) => fadeIo.observe(el));

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    const tgt = document.querySelector(this.getAttribute('href'));
    tgt?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ANNUAL / MONTHLY TOGGLE
const toggle = document.getElementById('annualToggle');
const grid = document.getElementById('pricingGrid');
toggle?.addEventListener('change', () => {
  grid.classList.toggle('annual', toggle.checked);
});

// FOOTER YEAR
document.getElementById('year').textContent = new Date().getFullYear();
