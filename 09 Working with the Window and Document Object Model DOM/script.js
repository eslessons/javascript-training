localStorage.setItem('key1', 1000);
console.log(localStorage.getItem('key1'));

sessionStorage.setItem('key1', 1000);
console.log(sessionStorage.getItem('key'));

console.log(window.location);

console.log(window.document);

window.open('http://www.google.com');

console.log(location.hostname);

console.log(location.path);

location.reload();

location.replace('http://google.com');

console.log(document.body);

console.log(document.body.children);

console.log(document.body.children[0].textContent); // "Hello!"

document.body.children[0].textContent = 'Something else!';

console.log(document.body.children[0]);

document.body.children[0].style.backgroundColor = 'red';

console.log(document.body.firstChild); // whitespaces or tab
console.log(
  document.body.firstElementChild.firstElementChild,
  document.body.lastElementChild.nextElementSibling.parentElement
);

console.log(document.getElementsByTagName('li')); // array of li items
console.log(document.getElementsByClassName('simple'));
console.log(document.getElementById('simple'));

console.log(document.querySelector('.simple')); // first el
console.log(document.querySelectorAll('.simple')); // array of elements

document.querySelector('a').style.backgroundColor = 'red';
document.querySelectorAll('.simple')[1].backgroundColor = 'red';
document.querySelector('.simple').firstElementChild.textContent = 'Hello';

var p = document.createElement('P')