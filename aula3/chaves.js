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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}
