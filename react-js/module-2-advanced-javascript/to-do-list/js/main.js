// button toggler on navigation
const sidebar = document.getElementById('sidebar'); //DOM
const openBtn = document.getElementById('openSidebar'); //DOM
const closeBtn = document.getElementById('closeSidebar'); //DOM

openBtn.addEventListener('click', () => {
sidebar.classList.remove('-translate-x-full');
});

closeBtn.addEventListener('click', () => {
sidebar.classList.add('-translate-x-full');

});

