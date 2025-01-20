document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header nav ul li a');
  
    // Highlight current section
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
          current = section.getAttribute('id');
        }
      });
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  
    // Smooth scrolling
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  