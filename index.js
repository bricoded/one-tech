const blueLine = document.querySelector('.deals .items .head .after');

const h4One = document.querySelector('.deals .items .head h4:nth-child(1)');
const h4Two = document.querySelector('.deals .items .head h4:nth-child(2)');
const h4Three = document.querySelector('.deals .items .head h4:nth-child(3)');

h4One.addEventListener('click', function() {
  blueLine.style.left = 0;
  blueLine.style.width = '85px';
  blueLine.style.transition = '.3s ease-in-out';
})

h4Two.addEventListener('click', function() {
  blueLine.style.left = '124px';
  blueLine.style.width = '70px';
  blueLine.style.transition = '.3s ease-in-out';
})

h4Three.addEventListener('click', function() {
  blueLine.style.left = '235px';
  blueLine.style.width = '100px';
  blueLine.style.transition = '.3s ease-in-out';
})

const blueLine2 = document.querySelector('.container.arrival .head .after');

const h4Four = document.querySelector('.container.arrival .head h4:nth-child(1)');
const h4Five = document.querySelector('.container.arrival .head h4:nth-child(2)');
const h4Six = document.querySelector('.container.arrival .head h4:nth-child(3)');

h4Four.addEventListener('click', function() {
  blueLine2.style.width = '85px';
  blueLine2.style.left = '59%';
  blueLine2.style.transition = '.3s ease-in-out';
})

h4Five.addEventListener('click', function() {
  blueLine2.style.width = '130px';
  blueLine2.style.left = '69.5%';
  blueLine2.style.transition = '.3s ease-in-out';
})

h4Six.addEventListener('click', function() {
  blueLine2.style.width = '187px';
  blueLine2.style.left = '84%';
  blueLine2.style.transition = '.3s ease-in-out';
})