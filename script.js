
/* ------------ BOTÕES  ------------ */

// Selecionando o botão de fundo:
const btnFundo = document.querySelector('#btnFundo')

function escolherCorAleatoria() {
    // Entendendo a aleatoriedade...
    // Math.random() gera um número entre 0 e 1 (excluindo o 1)
    // Como os números gerados são de ponto flutuante (Ex.: 0.23424, 0.34523432), arredondamos para o menor número inteiro mais próximo
    // Vai ficar: Math.floor(Math.random() * 5) --> Isso só vai encontrar números de 0 a 4
    // Para incluir o 5, basta somarmos mais 1: Math.floor(Math.random() * 5) + 1;
    // Se quisermos colocar um número de início, ex.:, gerar números entre 2 e 5, faremos: Math.floor(Math.random() * 4) + 2;
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

btnFundo.addEventListener('click', function(e) {
    const paginaCor = document.querySelector('#pagina');
    paginaCor.style.backgroundColor = escolherCorAleatoria();
});

// Mudando a fonte:

  const btnTitulo = document.querySelector('#btnTitulo')  

  
  btnTitulo.addEventListener('click', function(e) {

    function fonteAleatoria() {
        const fontes = [
          'Arial', 
          'Arial Black',
          'Helvetica', 
          'Times New Roman', 
          'Courier New', 
          'Verdana', 
          'Georgia', 
          'Comic Sans MS',
          'Impact',
          'Lucida Console',
          'Palatino',
          'Trebuchet MS',
          'Garamond',
          'Tahoma'

        ];
    
        fonteAleatoria = fontes[Math.floor(Math.random() * fontes.length)]
        return fonteAleatoria
    
      }

    const tituloFonte = document.querySelector('#titulo');
    tituloFonte.style.fontFamily = fonteAleatoria().toString();

  });
  


  const btnSubtitulo = document.querySelector('#btnSubtitulo')  
  
  btnSubtitulo.addEventListener('click', function(e) {

    function fonteAleatoria() {
        const fontes = [
          'Arial', 
          'Arial Black',
          'Helvetica', 
          'Times New Roman', 
          'Courier New', 
          'Verdana', 
          'Georgia', 
          'Comic Sans MS',
          'Impact',
          'Lucida Console',
          'Palatino',
          'Trebuchet MS',
          'Garamond',
          'Tahoma'

        ];
    
        fonteAleatoria = fontes[Math.floor(Math.random() * fontes.length)]
        return fonteAleatoria
    
      }

    const subTituloFonte = document.querySelector('#subtitulo');
    subTituloFonte.style.fontFamily = fonteAleatoria().toString();

  });


  const btnTexto = document.querySelector('#btnTexto')  
  
  btnTexto.addEventListener('click', function(e) {

    function fonteAleatoria() {
        const fontes = [
          'Arial', 
          'Arial Black',
          'Helvetica', 
          'Times New Roman', 
          'Courier New', 
          'Verdana', 
          'Georgia', 
          'Comic Sans MS',
          'Impact',
          'Lucida Console',
          'Palatino',
          'Trebuchet MS',
          'Garamond',
          'Tahoma'

        ];
    
        fonteAleatoria = fontes[Math.floor(Math.random() * fontes.length)]
        return fonteAleatoria
    
      }

    const textoFonte = document.querySelector('#texto');
    textoFonte.style.fontFamily = fonteAleatoria().toString();

  });

  const restaurar = document.querySelector('#restaurar')  

  restaurar.addEventListener('click', function(e) {

    location.reload();

  });


const btnSalvar = document.querySelector('#btnSalvar')

btnSalvar.addEventListener('click', function(e) {

    const inputTitulo = document.querySelector('#inputTitulo').value
    
    const inputSubtitulo = document.querySelector('#inputSubtitulo').value

    const inputTexto = document.querySelector('#inputTexto').value

    let titulo = document.querySelector('#titulo')
    titulo.innerHTML = inputTitulo

    let subtitulo = document.querySelector('#subtitulo')
    subtitulo.innerHTML = inputSubtitulo

    let texto = document.querySelector('#texto')
    texto.innerHTML = inputTexto

});