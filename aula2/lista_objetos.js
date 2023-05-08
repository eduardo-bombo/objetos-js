const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["00123456789", "99123456780"],
}

cliente.enderecos = [{
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "Ap. 934",
}];

cliente.enderecos.push({
    rua: "Rua Joseph Ladder",
    numero: 404,
    apartamento: false,
});

//NOVA LISTA com UMA entrada de UM objeto!!!
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos);