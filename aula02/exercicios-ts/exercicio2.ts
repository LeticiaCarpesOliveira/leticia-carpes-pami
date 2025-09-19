
// Array cidades

let cidade : string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Paraná', 'Fortaleza'];

function cidades(cidade: string[]) : void {
    cidade.forEach(cidade => console.log(cidade));
}

cidades(cidade);