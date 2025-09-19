
// Criar interface

interface Livro {
    titulo : string;
    autor :  string;
    anoPublicacao : number; //Opcional
}


// Objeto

exibirLivro({ titulo: 'O Alienista', autor: 'Machado de Assis', anoPublicacao: 1882});

// Função que exibe o Livro

function exibirLivro(usuario : Livro) : void {
    console.log(`Título: ${usuario.titulo}`);
    console.log(`Autor: ${usuario.autor}`);
    console.log(`Ano de Publicação: ${usuario.anoPublicacao}`);
}

