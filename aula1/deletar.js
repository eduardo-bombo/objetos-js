const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago",
    },
    status: "desaparecido",
}

//Importante! O "delete" remove a chave e o valor da propriedade do objeto.
delete objPersonagem.aliado;
delete objPersonagem["status"];

console.log(objPersonagem.aliado); //undefined
console.log(objPersonagem.status); //undefined
console.log(objPersonagem);