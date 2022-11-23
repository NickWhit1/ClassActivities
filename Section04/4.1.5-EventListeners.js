document.querySelector('.nav-bar').addEventListener('click', event => {
  console.log("event", event);
  // event.target.style.backgroundColor = "green";
  event.target.classList.toggle('back-green');
});


document.querySelector('.nav-bar').addEventListener('hover', event => {
  console.log("event.target", event.target);
});


document.querySelector('body').addEventListener('keyup', event => {
  console.log("event.key", event.key);
});
