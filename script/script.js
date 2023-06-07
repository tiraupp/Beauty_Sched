const cadastroCliente = document.getElementById("cadastroCliente");
const cadastroProfissional = document.getElementById("cadastroProfissional");
const cadastroSenhaCliente = document.getElementById("btnSenhaCliente");
const cadastroSenhaProfissional = document.getElementById(
    "btnSenhaProfissional"
);
const senhaProfissionalSucesso = document.getElementById(
    "btnCadastroSenhaProfissionalSucesso"
);
const senhaClienteSucesso = document.getElementById(
    "btnCadastroSenhaClienteSucesso"
);
const sucesso = document.getElementById("btnSucesso");

function openIndex() {
    window.open("index.html", "_self");
}

function openCadastroCliente() {
    window.open("/src/screens/cadastroCliente.html", "_self");
}

function openCadastroProfissional() {
    window.open("/src/screens/cadastroProfissional.html", "_self");
}

function openCadastroSenhaCliente() {
    alert("senha cliente");
    window.open("/src/screens/cadastroSenhaCliente.html", "_self");
}

function openCadastroSenhaProfissional() {
    alert("senha prof");
    window.open("/src/screens/cadastroSenhaProfissional.html", "_self");
}

function openCadastroSenhaSucesso() {
    window.open("/src/screens/sucesso.html", "_self");
}

cadastroCliente.addEventListener("click", openCadastroCliente);
cadastroProfissional.addEventListener("click", openCadastroProfissional);
cadastroSenhaCliente.addEventListener("click", openCadastroSenhaCliente);
cadastroSenhaProfissional.addEventListener(
    "click",
    openCadastroSenhaProfissional
);

senhaProfissionalSucesso.addEventListener("click", openCadastroSenhaSucesso);
senhaClienteSucesso.addEventListener("click", openCadastroSenhaSucesso);
sucesso.addEventListener("click", openIndex);
