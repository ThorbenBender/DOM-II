// Your code goes here
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = 'green';
})

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
document.querySelector('.intro').prepend('<input type="text" placeholder="Type in your name"/>')
.addEventListener('select', () => {
    
})


const letsGo = document.querySelector('.content-section h2');
letsGo.addEventListener('dbclick', () => {
    letsGo.style.color = 'green';
})

const navbar = document.querySelector('.nav a')
navbar.addEventListener('click', function(event){
    event.preventDefault();
})