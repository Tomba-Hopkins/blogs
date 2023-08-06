const utama = document.querySelector('.utama');
const huruf = [...utama.textContent].map(h => `<span>${h}</span>`).join('');
utama.innerHTML = huruf;


const tombol = document.querySelector('.tombol');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const jumbo = document.querySelector('.jumbotron');
const footer = document.querySelector('footer');
const kaki = document.querySelector('.kaki');
tombol.addEventListener('click', function () {
    body.classList.toggle('darkmode');
    nav.classList.toggle('darknav');
    jumbo.classList.toggle('darkjumbo');
    footer.classList.toggle('darkmode');
    kaki.innerHTML = 'Copyright &copy; 2023, Perut ku mules susah berak huhuhu';
})