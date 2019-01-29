// Your code goes here
const btn = document.querySelectorAll('.btn');
for (let i = 0; i < 3; i++){
    btn[i].addEventListener('mouseover', function(){
        btn[i].style.backgroundColor = 'green';
    })
}
const homeA = document.querySelector('nav a');

const logo = document.querySelector('.logo-heading');
logo.addEventListener('keydown', (e) => {
    let keycode = e.keycode;
    console.log(keycode);
    if (keycode === 'e'){
        logo.style.color = 'green';
    }
}, false)


const welcomeTo = document.querySelector('.intro h2');
welcomeTo.addEventListener('wheel', () => {
    welcomeTo.style.color = 'green';
})

document.body.addEventListener('load', () => {
    document.body.style.color = 'green';
})

document.body.addEventListener('resize', () => {
    document.body.style.color = 'yellow';
})

// .addEventListener('scroll', () => {

// })
document.querySelector('header').addEventListener('click', () => {
    document.querySelector('header').style.color = 'green';

})

const letsGo = document.querySelector('.content-section h2');
letsGo.addEventListener('dbclick', () => {
    letsGo.style.color = 'green';
})

const navbar = document.querySelectorAll('.nav a')
navbar.addEventListener('click', function(event){
    event.preventDefault();
})


/// drag and drop
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }