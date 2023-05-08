const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com",
}

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos.`);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}.`);

//Podemos usar o operador "." para acessar as propriedades que já conhecemos de um objeto.