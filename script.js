const cpf = document.querySelector("#cpf");
const botaoGerarCPF = document.querySelector("#gerar-cpf");
const botaoCopiarCPF = document.querySelector("#copiar-cpf");

// 999.999.999-99
function gerarCPF() {
    let n = Math.floor(Math.random() * 999999999) + 1;
    let nStr = n.toString().padStart(9, "0");
    let dv1 = calcularDV(nStr, 10);
    let dv2 = calcularDV(nStr + dv1, 11);

    cpf.innerText = formatarCPF(nStr + dv1 + dv2);
}

function calcularDV(numero, peso) {
    let total = 0;
    for (let i = 0; i < numero.length; i++) {
        total += parseInt(numero.charAt(i)) * peso--;
    }
    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function formatarCPF(cpf) {
    // Expressão regular
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return cpf.replace(regex, "$1.$2.$3-$4"); // 999.999.999-99
}

function copiarCPF() {
    const cpfTexto = cpf.innerText;
    navigator.clipboard.writeText(cpfTexto).then(() => {
        alert(`CPF ${cpfTexto} copiado para a área de transferência!`);
    });
    (erro) => {
        console.log("Erro ao copiar o CPF!");
    };
}

botaoGerarCPF.addEventListener("click", gerarCPF);
botaoCopiarCPF.addEventListener("click", copiarCPF);
