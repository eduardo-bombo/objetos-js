const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com",
}

console.log(`O nome do cliente é ${cliente["nome"]} e sua idade é ${cliente["idade"]} anos.`);

// dá para acessar campos que não necessariamente a gente tenha acesso quando estamos escrevendo o código
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});

//Podemos utilizar o nome da propriedade como string dentro de colchetes [“propriedade”] para acessar as propriedades de um objeto de forma mais dinâmica.