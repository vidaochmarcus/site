const resizeMap = () => {
  const mapContainer = document.getElementById("map");
  const mapIframe = document.querySelector("#map iframe");

  mapIframe.style.width = mapContainer.clientWidth + 'px';
  mapIframe.style.height = mapContainer.clientHeight + 'px';
}

document.addEventListener('resize', (event) => resizeMap());

setTimeout(resizeMap, 10);

const dateAnimation = () => {
  const textElement = document.getElementById("dateText");
  const text = "2025 07 05";
  let index = 0;

  textElement.classList.add("fade-in");

  function typeCharacter() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(typeCharacter, 250);
    }
  }

  typeCharacter();
};

document.addEventListener('DOMContentLoaded', () => {
  dateAnimation();
    const links = document.querySelectorAll('header nav ul li a');

    const listener = () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        console.log(section.id);
        console.log(scrollY);
        console.log('offsetTop', section.offsetTop);
        console.log('sectionHeight', section.clientHeight);

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 2) {
          current = section.getAttribute('id');
        }
      });
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    };
  
    // Highlight current section
    document.querySelector('main').addEventListener('scroll', listener);
  
    // Smooth scrolling
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    listener();
  });
  