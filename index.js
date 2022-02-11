const toggleElement = document.querySelector('.toggle');
const showcaseElement = document.querySelector('.showcase');
const menuElement = document.querySelector('.menu');

const closeButton = document.querySelector('.close')

toggleElement.addEventListener('click', () => {
    toggleElement.classList.toggle('active');
    showcaseElement.classList.toggle('active');
})
closeButton.addEventListener('click', () => {
    toggleElement.classList.toggle('active');
    showcaseElement.classList.toggle('active');
})
