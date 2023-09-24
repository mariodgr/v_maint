const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');

    if (menuToggle.classList.contains('active')) {
        setTimeout(() => {  // setTimeout function introduces the delay
            menu.style.zIndex = "3";
        }, 500);  // delay of 500 milliseconds, or half a second
    } else {
        menu.style.zIndex = "1";
    }
});
