  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
 
  document.querySelectorAll('[data-anim]').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.1}s`;
    observer.observe(el);
  });