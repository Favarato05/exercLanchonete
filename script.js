let produtos = [
    { nome: "X-Burguer", preco: 15.00, categoria: "Lanche" },
    { nome: "Batata Frita", preco: 10.00, categoria: "Acompanhamento" },
    { nome: "Refrigerante", preco: 8.00, categoria: "Bebida" },
    { nome: "Milk-shake", preco: 12.00, categoria: "Bebida" },
    { nome: "Sorvete", preco: 7.00, categoria: "Sobremesa" }
];

let pedidos = [];


function listarMenu(callback) {
    let texto = "Cardápio:\n\n";

    produtos.forEach((produto, index) => {
        texto += `${index + 1} - ${produto.nome} | Categoria: ${produto.categoria} | R$ ${produto.preco.toFixed(2)}\n`;
    });

    alert(texto);

    if (callback) callback();
}


function listarPedidos() {
    if (pedidos.length === 0) {
        alert("Nenhum pedido cadastrado.");
        return;
    }

    let texto = "Pedidos:\n\n";

    pedidos.forEach((pedido, index) => {
        texto += `Pedido ${index + 1}\n`;
        texto += `Produto: ${pedido.produto}\n`;
        texto += `Quantidade: ${pedido.quantidade}\n`;
        texto += `Preço unitário: R$ ${pedido.precoUnitario.toFixed(2)}\n`;
        texto += `Valor total: R$ ${pedido.valorTotal.toFixed(2)}\n`;
        texto += "-------------------\n";
    });

    alert(texto);
}


function cadastrarPedido(indiceProduto, quantidade, callback) {
    const produto = produtos[indiceProduto];

    if (!produto) {
        alert("Produto inválido.");
        return;
    }

    const pedido = {
        produto: produto.nome,
        quantidade: quantidade,
        precoUnitario: produto.preco,
        valorTotal: produto.preco * quantidade
    };

    pedidos.push(pedido);

    alert("Pedido cadastrado com sucesso!");

    if (callback) callback();
}


function iniciar() {
    let continuar = true;

    while (continuar) {

        
        listarMenu(() => {});

        let opcao = parseInt(prompt("Digite o número do produto:"));

        if (isNaN(opcao) || opcao < 1 || opcao > produtos.length) {
            alert("Opção inválida.");
            continue;
        }

        let quantidade = parseInt(prompt("Digite a quantidade:"));

        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Quantidade inválida.");
            continue;
        }

        cadastrarPedido(opcao - 1, quantidade, listarPedidos);

        let resposta = prompt("Deseja fazer outro pedido? (s/n)");
        continuar = resposta.toLowerCase() === "s";
    }

    alert("Sistema encerrado.");
}

iniciar();