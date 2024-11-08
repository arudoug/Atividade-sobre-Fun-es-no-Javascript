let produto = {
    nome: 'MousePad',
    codigo: '123456',
    valor: 100,
    parcelas: 12
};

function efetuarDesconto(produto) {
    if (produto.parcelas > 12) {
        console.log("O valor máximo de parcelas é 12");
        return;
    }

    if (produto.parcelas < 0) {
        console.log("O valor de parcelas não pode ser negativo");
        return;
    }

    if (produto.valor <= 0) {
        console.log("O valor do produto deve ser positivo");
        return;
    }
    
    if (produto.parcelas === 0) {
        const valorComDesconto = produto.valor * 0.9;
        console.log(`Valor à vista é R$ ${valorComDesconto}`); 
    } else if (produto.parcelas <= 10) {
        const valorParcela = produto.valor / produto.parcelas;
        console.log(`Valor parcelado em ${produto.parcelas} parcelas é R$ ${valorParcela}`);
    } else if (produto.parcelas <= 12) {
        const valorParcelaComJuros = (produto.valor * 1.02) / produto.parcelas;
        console.log(`Compra parcelada em ${produto.parcelas} parcelas, o valor de cada parcela é R$ ${valorParcelaComJuros}`);
    }
}

efetuarDesconto(produto);