function textAnimation(timeLine) {
  timeLine.fromTo(
    '.hero-img',
    { scale: 1.3, borderRadius: '0rem' },
    {
      scale: 1,
      borderRadius: '2rem',
      delay: 0.35,
      duration: 2.5,
      ease: 'elastic.out(1.5, 1)',
    }
  );
  timeLine.fromTo(
    '.cta1',
    { x: '100%', opacity: 0.5 },
    { x: 0, opacity: 1 },
    '<20%'
  );
  timeLine.fromTo(
    '.cta2',
    { y: '100%', opacity: 0.5 },
    { y: 0, opacity: 1 },
    '<20%'
  );
  timeLine.fromTo(
    '.cta3',
    { x: '-100%', opacity: 0.5 },
    { x: 0, opacity: 1 },
    '<20%'
  );
  timeLine.fromTo(
    '.cta4',
    { x: '100%', opacity: 0.5 },
    { x: 0, opacity: 1 },
    '<20%'
  );
  timeLine.fromTo(
    '.cta5',
    { y: '100%', opacity: 0.5 },
    { y: 0, opacity: 1 },
    '<20%'
  );
  timeLine.fromTo(
    '.cta6',
    { x: '100%', opacity: 0.5 },
    { x: 0, opacity: 1 },
    '<20%'
  );
  timeLine.fromTo('.cta-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '<');
}

function splitText(timeLine, letters, logo) {
  logo.textContent = '';

  for (let letter of letters) {
    logo.innerHTML += `<span class=\"letter\">${letter}</span>`;
  }

  gsap.set('.letter', { display: 'inline-block' });
  gsap.fromTo(
    '.letter',
    { y: '100%' },
    { y: 0, delay: 2, stagger: 0.05, ease: 'back.out(3)' }
  );
}

function ready() {
  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: 'Power3.easeOut' },
  });
  //Split text alternative
  const logo = document.querySelector('.logo');
  const letters = logo.textContent.split('');
  const button = document.querySelector('.cta-btn');

  textAnimation(tl);
  splitText(tl, letters, logo);

  button.addEventListener('click', () => {
    textAnimation(tl);
    splitText(tl, letters, logo);
  });
}

document.addEventListener('DOMContentLoaded', ready);
