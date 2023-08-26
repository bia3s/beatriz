<<<<<<< HEAD
import { textoIngles } from "../dicionario/eng.js";
import { textoPortugues } from "../dicionario/ptbr.js";

const botoesTraducao = [
    document.querySelector('.uk'),
    document.querySelector('.br'),
];

const elementosPaginaPrincipal = [
=======
import { textoPortugues } from '../dicionario/pt_br.js';
import { textoIngles } from '../dicionario/eng.js';

const navbar = [
>>>>>>> c93f8c698d73b62342b97e983eb801abd41d0bda
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
<<<<<<< HEAD
    document.querySelector('.uxdesign'),
    document.querySelector('.webdesign'),
    document.querySelector('.impressos'),
    document.querySelector('.identidadevisual'),
    document.querySelector('.conteudo_titulo_uxdesign'),
    document.querySelector('.conteudo_texto_uxdesign'),
    document.querySelector('.conteudo_titulo_webdesign'),
    document.querySelector('.conteudo_texto_webdesign'),
    document.querySelector('.conteudo_titulo_identidadevisual'),
    document.querySelector('.conteudo_texto_identidadevisual'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
    document.querySelector('.conteudo_btn')
];

const elementosPortfolio = [
    document.querySelector('.home'),
    document.querySelector('.portfolio'),
    document.querySelector('.sobre'),
    document.querySelector('.contato'),
    document.querySelector('.uxdesign'),
    document.querySelector('.portfolio_projetoux_titulo'),
    document.querySelector('.portfolio_desafio_strong'),
    document.querySelector('.portfolio_desafio_paragrafo'),
    document.querySelector('.portfolio_solucao_strong'),
    document.querySelector('.portfolio_solucao_paragrafo'),
    document.querySelector('.portfolio_entregaveis_paragrafo'),
    document.querySelector('.matriz'),
    document.querySelector('.persona'),
    document.querySelector('.flow'),
    document.querySelector('.wireframes'),
    document.querySelector('.voz'),
    document.querySelector('.navegavel'),
    document.querySelector('.botao_mybuddy'),
    document.querySelector('.botao_mobile'),
    document.querySelector('.rodape_email'),
    document.querySelector('.rodape_linkedin'),
    document.querySelector('.rodape_github'),
    document.querySelector('.rodape_frase'),
    document.querySelector('.rodape_ano'),
    document.querySelector('.conteudo_btn')
];

const selecionaIdioma = () => {

    for(let i = 0; i < botoesTraducao.length; i++) {

        botoesTraducao[i].addEventListener('click', (e)=> {

            let idioma = e.target.classList[1];

            idioma === 'br'
                ? traducaoElementos(textoPortugues)
                : traducaoElementos(textoIngles);

        });

    }

}

const traducaoElementos = (idioma) => {

    
    let arrayElementos = [];

    if(document.body.classList[0] === 'PaginaPrincipal') {

        arrayElementos = elementosPaginaPrincipal

    } else if(document.body.classList[0] === 'PaginaPortfolio') {

        arrayElementos = elementosPortfolio;

    }
    
    arrayElementos.forEach(item=> {

        let chave = item.classList[1];
        let classe = item.classList[2];

        item.textContent = idioma[chave][classe];

    });

} 

(()=> {
    selecionaIdioma();
    traducaoElementos(textoPortugues);
})();   
=======
];

>>>>>>> c93f8c698d73b62342b97e983eb801abd41d0bda
