const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["00123456789", "99123456780"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: R$ ${this.saldo}.`)
        }
    }
}

cliente.efetuaPagamento(150);