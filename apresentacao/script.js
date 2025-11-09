// funcao do botao para troca de cor da pagina
// usando toggle

function troca (){
    const white = document.documentElement
    white.classList.toggle("light")
    
    // usando estrutura condicional
    // if(white.classList.contains('light')){
    //     white.classList.remove('light')
    // }else{
    //     white.classList.add('light')
    // }
}