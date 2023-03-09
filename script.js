/* ------------ BOTÕES  ------------ */

const escolherCorAleatoria = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

const btnFundo = document.querySelector('#btnFundo').addEventListener('click', () => {
    document.querySelector('#pagina').style.backgroundColor = escolherCorAleatoria();
});

const fontes = [
    'Arial', 'Arial Black', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana',
    'Georgia', 'Comic Sans MS', 'Impact', 'Lucida Console', 'Palatino', 'Trebuchet MS', 'Garamond', 'Tahoma'
];

const fonteAleatoria = () => fontes[Math.floor(Math.random() * fontes.length)];

const btnTitulo = document.querySelector('#btnTitulo').addEventListener('click', () => {
    document.querySelector('#titulo').style.fontFamily = fonteAleatoria();
});

const btnSubtitulo = document.querySelector('#btnSubtitulo').addEventListener('click', () => {
    document.querySelector('#subtitulo').style.fontFamily = fonteAleatoria();
});

const btnTexto = document.querySelector('#btnTexto').addEventListener('click', () => {
    document.querySelector('#texto').style.fontFamily = fonteAleatoria();
});

const restaurar = document.querySelector('#restaurar').addEventListener('click', () => {
    location.reload();
});

const btnSalvar = document.querySelector('#btnSalvar').addEventListener('click', () => {
    document.querySelector('#titulo').innerHTML = document.querySelector('#inputTitulo').value;
    document.querySelector('#subtitulo').innerHTML = document.querySelector('#inputSubtitulo').value;
    document.querySelector('#texto').innerHTML = document.querySelector('#inputTexto').value;
});
