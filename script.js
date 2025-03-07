// Simple script to add interactive behavior
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
});