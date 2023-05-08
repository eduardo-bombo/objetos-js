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

//for ... in = permite a iteração sobre as propriedades de um objeto (como em um array)
//teste
for (let chave in cliente) {
    console.log(chave);
}

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave "${chave}" tem o valor "${cliente[chave]}".`);
    }
}
