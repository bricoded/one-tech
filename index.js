const blueLine = document.querySelector('.deals .items .head .after');

const h4One = document.querySelector('.deals .items .head h4:nth-child(1)');
const h4Two = document.querySelector('.deals .items .head h4:nth-child(2)');
const h4Three = document.querySelector('.deals .items .head h4:nth-child(3)');

h4One.addEventListener('click', function () {
  blueLine.style.left = 0;
  blueLine.style.width = '85px';
  blueLine.style.transition = '.3s ease-in-out';
})

h4Two.addEventListener('click', function () {
  blueLine.style.left = '124px';
  blueLine.style.width = '70px';
  blueLine.style.transition = '.3s ease-in-out';
})

h4Three.addEventListener('click', function () {
  blueLine.style.left = '235px';
  blueLine.style.width = '100px';
  blueLine.style.transition = '.3s ease-in-out';
})

const blueLine2 = document.querySelector('.container.arrival .head .after');

const h4Four = document.querySelector('.container.arrival .head h4:nth-child(1)');
const h4Five = document.querySelector('.container.arrival .head h4:nth-child(2)');
const h4Six = document.querySelector('.container.arrival .head h4:nth-child(3)');

h4Four.addEventListener('click', function () {
  blueLine2.style.width = '85px';
  blueLine2.style.left = '59%';
  blueLine2.style.transition = '.3s ease-in-out';
})

h4Five.addEventListener('click', function () {
  blueLine2.style.width = '130px';
  blueLine2.style.left = '69.5%';
  blueLine2.style.transition = '.3s ease-in-out';
})

h4Six.addEventListener('click', function () {
  blueLine2.style.width = '187px';
  blueLine2.style.left = '84%';
  blueLine2.style.transition = '.3s ease-in-out';
})

const language = document.querySelector('#language span');
const childOne = document.querySelector('.child.one');

language.addEventListener('click', function () {
  childOne.classList.toggle('show');
})

const currency = document.querySelector('#currency span');
const childTwo = document.querySelector('.child.two');

currency.addEventListener('click', function () {
  childTwo.classList.toggle('show');
})

const styles = document.querySelector('#styles');
const childThree = document.querySelector('.child.three');

styles.addEventListener('click', function () {
  childThree.classList.toggle('show');
})

const superDealsMenu = document.querySelector('.dropdown1 .one p');
const superDealsChild2 = document.querySelector('.dropdown1-2');

superDealsMenu.addEventListener('click', function () {
  superDealsChild2.classList.toggle('show');
})

const superDeals = document.querySelector('li#deals1');
const superDealsChild = document.querySelector('.dropdown1');

superDeals.addEventListener('click', function () {
  superDealsChild.classList.toggle('show');
})

const brands = document.querySelector('li#brands');
const brandsChild = document.querySelector('.dropdown1.two');

brands.addEventListener('click', function () {
  brandsChild.classList.toggle('show')
})
