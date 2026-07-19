let receitas = 0;
let despesas = 0;

function adicionar() {

    const descricao = document.getElementById("descricao").value;
    const valor = Number(document.getElementById("valor").value);
    const categoria = document.getElementById("categoria").value;
    const tipo = document.getElementById("tipo").value;

    if (descricao === "" || valor <= 0) {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista");
    const item = document.createElement("li");

    if (tipo === "receita") {
        receitas += valor;
        item.innerHTML = `🟢 ${descricao} | ${categoria} | +R$ ${valor.toFixed(2)}`;
    } else {
        despesas += valor;
        item.innerHTML = `🔴 ${descricao} | ${categoria} | -R$ ${valor.toFixed(2)}`;
    }

    lista.appendChild(item);

    const saldo = receitas - despesas;

    document.getElementById("receitas").innerText = `R$ ${receitas.toFixed(2)}`;
    document.getElementById("despesas").innerText = `R$ ${despesas.toFixed(2)}`;
    document.getElementById("saldo").innerText = `R$ ${saldo.toFixed(2)}`;

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}
