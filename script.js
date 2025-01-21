/* ------------ BOTÕES ------------ */

// Função para gerar uma cor aleatória em formato hexadecimal
const escolherCorAleatoria = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

// Array com as fontes disponíveis
const fontes = [
    'Arial', 'Arial Black', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana',
    'Georgia', 'Comic Sans MS', 'Impact', 'Lucida Console', 'Palatino', 'Trebuchet MS', 'Garamond', 'Tahoma'
];

// Função para selecionar uma fonte aleatória do array
const fonteAleatoria = () => fontes[Math.floor(Math.random() * fontes.length)];

// Função para alterar o estilo de um elemento
const alterarEstilo = (seletor, estilo, valor) => {
    const elemento = document.querySelector(seletor);
    if (elemento) elemento.style[estilo] = valor;
};

// Função para alterar o conteúdo de texto de um elemento
const alterarTexto = (seletor, valor) => {
    const elemento = document.querySelector(seletor);
    if (elemento) elemento.innerHTML = valor;
};

// Botão para alterar a cor de fundo da página
document.querySelector('#btnFundo').addEventListener('click', () => {
    alterarEstilo('#pagina', 'backgroundColor', escolherCorAleatoria());
});

// Botões para alterar fontes dos elementos
document.querySelector('#btnTitulo').addEventListener('click', () => {
    alterarEstilo('#titulo', 'fontFamily', fonteAleatoria());
});

document.querySelector('#btnSubtitulo').addEventListener('click', () => {
    alterarEstilo('#subtitulo', 'fontFamily', fonteAleatoria());
});

document.querySelector('#btnTexto').addEventListener('click', () => {
    alterarEstilo('#texto', 'fontFamily', fonteAleatoria());
});

// Botão para restaurar a página
document.querySelector('#restaurar').addEventListener('click', () => {
    location.reload(); // Simplesmente recarrega a página
});

// Botão para salvar novos valores nos elementos
document.querySelector('#btnSalvar').addEventListener('click', () => {
    alterarTexto('#titulo', document.querySelector('#inputTitulo').value || 'Título Padrão');
    alterarTexto('#subtitulo', document.querySelector('#inputSubtitulo').value || 'Subtítulo Padrão');
    alterarTexto('#texto', document.querySelector('#inputTexto').value || 'Texto Padrão');
});
