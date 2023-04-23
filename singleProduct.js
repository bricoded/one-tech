const heart = document.querySelector(
  '.container.single .description > .cart div'
);

heart.onclick = () => {
  heart.classList.toggle('red');
};

const up = document.querySelector(
  '.container.single .description .quantity .buttons button:first-child'
);
const down = document.querySelector(
  '.container.single .description .quantity .buttons button:nth-child(2)'
);

const number = document.querySelector(
  '.container.single .description .quantity .count span'
);

let counter = 0;

up.onclick = count;
down.onclick = reduce;

function count() {
  counter++;
  number.innerHTML = counter;
  if (number.innerHTML > 0) {
    down.disabled = false;
    number.innerHTML = counter;
  } else {
    down.disabled = true;
  }
}

function reduce() {
  counter--;
  if (number.innerHTML > 0) {
    down.disabled = false;
    number.innerHTML = counter;
  } else {
    down.disabled = true;
  }
}

const color1 = document.querySelector(
  '.container.single .description .quantity .color .colordrop div:nth-child(1)'
);
const color2 = document.querySelector(
  '.container.single .description .quantity .color .colordrop div:nth-child(2)'
);
const color3 = document.querySelector(
  '.container.single .description .quantity .color .colordrop div:nth-child(3)'
);

const colorChange = document.querySelector(
  '.container.single .description .quantity .color div div'
);

color1.onclick = () => {
  colorChange.style.backgroundColor = '#999999';
};

color2.onclick = () => {
  colorChange.style.backgroundColor = '#b19c83';
};

color3.onclick = () => {
  colorChange.style.backgroundColor = '#000';
};
