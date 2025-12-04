let colorParent = document.querySelector('.default-colors');
let button = document.getElementById('change-background');
let background = document.querySelector('.background');

colorParent.addEventListener('click', (event) => {
  defaultBackground(event);
});

button.addEventListener('click', (event) => {
  generateBackground();
});
function defaultBackground(event) {
  if (event.target.className === 'default-colors') return;

  const newBg = event.target.className;
  let bgStyle = getComputedStyle(event.target);

  background.classList.forEach((cls) => {
    if (cls.startsWith('gradient-')) {
      background.classList.remove(cls);
    }
  });

  background.classList.add(newBg);
  background.textContent = bgStyle.backgroundImage;
}

function generateBackground() {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  background.classList.forEach((cls) => {
    if (cls.startsWith('gradient-')) {
      background.classList.remove(cls);
    }
  });
  background.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  background.textContent = `rgb(${c1},${c2},${c3})`;
}
generateBackground();
