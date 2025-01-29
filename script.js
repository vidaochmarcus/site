function rot13(message) {
  return message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
} 

const deobfuscateMail = () => {
  document.querySelectorAll("a.mailto").forEach(el => {
    const original = el.innerText;
    const rotated = rot13(original);

    el.innerText = rotated;
    el.href = `mailto:${rotated}`;
  })
}

const resizeMap = () => {
  const header = document.querySelector("header");
  const buffer = document.querySelector("div#buffer");

  buffer.style.height = header.clientHeight + 'px';
  
  const mapContainer = document.getElementById("map");
  const mapIframe = document.querySelector("#map iframe");

  mapIframe.style.width = mapContainer.clientWidth + 'px';
  mapIframe.style.height = (mapContainer.clientHeight - buffer.clientHeight) + 'px';
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
  deobfuscateMail();

    const links = document.querySelectorAll('header nav ul li a');

    const listener = () => {
      let current = '';
      const main = document.querySelector('main');
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (main.scrollTop >= sectionTop - sectionHeight / 2) {
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
  