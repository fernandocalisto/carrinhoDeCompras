let total = 0;
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos').children[0];
    let valorTotal = document.getElementById('valor-total');
    if (!quantidade){
        quantidade = 1;
    }
    carrinho.innerHTML += nomeProduto(produto,quantidade);
    total += (valorProduto(produto) * quantidade);
    valorTotal.textContent = `R$${total}`;
}
function valorProduto(produto){
    if (produto=='Fone de ouvido - R$100'){
        return 100;
    }
    else if (produto=='Celular - R$1400'){
        return 1400;
    }
    else{
        return 5000;
    }
}
function nomeProduto(produto,quantidade){


    if (produto=='Fone de ouvido - R$100'){
        return `<br><span class="texto-azul">${quantidade}x</span> Fone de Ouvido <span class="texto-azul">R$${100*quantidade}</span>`;
    }
    else if (produto=='Celular - R$1400'){
        return `<br><span class="texto-azul">${quantidade}x</span> Celular <span class="texto-azul">R$${1400*quantidade}</span>`;
    }
    else{
        return `<br><span class="texto-azul">${quantidade}x</span> Oculus VR <span class="texto-azul">R$${5000*quantidade}</span>`;
    }
}