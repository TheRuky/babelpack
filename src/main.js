import IdFactory from './id-factory.js';
import Swiper from 'swiper';

console.log('[TEST] import');
const array = IdFactory.getIds(5);
console.log(array);

console.log();

console.log('[TEST] Array.forEach()');
array.forEach(item => console.log(item.id));

console.log();

console.log('[TEST] Array.map()');
console.log(array.map(item => item.id));

console.log();

console.log('[TEST] Array/Object spread');
console.log(...array);
array.forEach(item => console.log({ ...item, user: `user${item.id}` }));

console.log();

console.log('[TEST] IntersectionObserver');
console.log(IntersectionObserver);

console.log();

console.log('[TEST] NodeList.forEach() on multiple elements returned');
document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.style.color = 'red';
  console.log('Slide:', slide);
});

console.log();

console.log('[TEST] NodeList.forEach() on one element returned');
document.querySelectorAll('h1').forEach(title => {
  title.style.color = 'blue';
  console.log('Title:', title);
});

console.log();

console.log('[TEST] Swiper');
console.log(new Swiper('.swiper-container'));

console.log();

console.log('[TEST] Promise.resolve()');
Promise.resolve(array).then((arr) => {
  console.log(arr);

  console.log();

  console.log('[TEST] async/await');

  const timeConsumingFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Time consuming function done!'), 3000);
    });
  };

  (async () => {
    const message = await timeConsumingFunction();
    console.log(message);
  })();
});