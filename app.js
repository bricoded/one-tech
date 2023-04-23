const menu = document.querySelector('.categories div:nth-child(2)');
const list = document.querySelector('.sec-2 .container>div ul.list');

menu.addEventListener('click', () => {
  list.classList.toggle('nav');
});

const fav = document.querySelectorAll('.fa-heart');

fav.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('red')
  })
});