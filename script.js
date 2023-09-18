//!Seleciona elementos
const panels = document.querySelectorAll('.panel') //Isso encontra todos os elementos que têm a classe chamada 
                                                    //.panel no documento HTML e os coloca em uma lista chamada panels.

//!Tornando os Painéis Interativos                                                    
panels.forEach(panel => { 
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}) 
//Isso percorre cada elemento da lista panels (ou seja, cada painel) e faz o seguinte quando você clica em um painel:
//Chama uma função chamada removeActiveClasses() que vai retirar a classe "ativa" de todos os painéis.
//Depois, adiciona a classe "ativa" apenas ao painel que você clicou. Isso torna esse painel especial.

//!Removendo a Classe ativa
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

//Quando um elemento .panel é clicado, ele remove a classe .active de todos 
// os elementos .panel e, em seguida, adiciona a classe .active apenas ao elemento que foi clicado, tornando-o ativo.