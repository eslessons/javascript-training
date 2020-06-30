window.onload = function () {
  console.log('Window loaded!');
};
var btn = document.querySelector('button');

btn.onclick = function () {
  console.log('Clicked!');
};

console.log(btn);

document.onclick = function () {
  console.log('Clicked!');
};

setTimeout(function () {
  btn.removeEventListener('click', 'listener1');
}, 2000);

function listener1() {
  console.log('Listener 1');
}
function listener2() {
  console.log('Listener 2');
}

btn.addEventListener('click', listener1);
btn.addEventListener('click', listener2);

///////////////////////////////////////////

var inner = document.querySelector('#inner');
var inner = document.querySelector('#outer');

inner.addEventListener('click', innerListener);
inner.addEventListener('click', outerListener);

function innerListener(event) {
  // console.log(event.bubbles); // propagates? true : false
  // event.stopPropagation();

  console.log(event.target);
  event.target.style.backgroundColor = 'red';

  console.log(event.clientX, event.clientY);

  console.log('Clicked inner!'); // both 'Clicked inner' 'Clicked outer'
}

function outerListener(event) {
  console.log('Clicked outer!');
}

inner.addEventListener('click', innerListener, true); // Changes the order of propagation
