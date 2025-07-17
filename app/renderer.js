const button = document.querySelector('.alert');

button.addEventListener('click', () => {
    alert(window.electronAPI.getCurrentDirectory());
});