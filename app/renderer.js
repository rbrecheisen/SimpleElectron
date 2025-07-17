// const info = document.getElementById('info')
// info.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`

const button = document.querySelector('.alert');
button.addEventListener('click', () => {
    alert('Button clicked');
    // alert(window.electronAPI.getCurrentDirectory());
});