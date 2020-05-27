window.addEventListener('load', () => {
  const updateHash = (hash) => {
    history.replaceState(null, null, `#${hash}`);
  };
  const updateButtons = () => {
    if (index === 0) previous.disabled = true;
    if (index === sections.length - 1) next.disabled = true;
  };
  let index = 0;
  const sections = [].slice.call(document.querySelectorAll('section'));
  if (window.location.hash !== '') {
    index = sections.indexOf(document.querySelector(window.location.hash));
  }
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  sections[index].classList.remove('hidden');
  updateHash(sections[index].id);
  const previous = document.createElement('button');
  previous.id = 'previous';
  previous.addEventListener('click', () => {
    next.disabled = false;
    sections[index].classList.add('hidden');
    index = index - 1;
    if (index === 0) previous.disabled = true;
    sections[index].classList.remove('hidden');
    updateButtons();
    updateHash(sections[index].id);
  });
  previous.textContent = 'Previous';
  const next = document.createElement('button');
  next.id = 'next';
  next.addEventListener('click', () => {
    previous.disabled = false;
    sections[index].classList.add('hidden');
    index = index + 1;
    sections[index].classList.remove('hidden');
    updateButtons();
    updateHash(sections[index].id);
  });
  next.textContent = 'Next';
  const main = document.querySelector('main');
  main.appendChild(previous);
  main.appendChild(next);
  updateButtons();
});