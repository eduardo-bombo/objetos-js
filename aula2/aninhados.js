const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["00123456789", "99123456780"],
}

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "Ap. 934",
}

console.log(cliente.endereco.numero);