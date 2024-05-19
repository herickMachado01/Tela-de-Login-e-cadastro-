
const usuarios = {
    "teste123@gmail.com": "senha1",
    "teste2@gamil.com": "senha2",
    "teste4@gamil.com": "senha3"
};


function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (usuarios[email] && usuarios[email] === senha) {
        window.location.href = "index2.html";
    } else {
        alert("E-mail ou Senha incorretos. Por favor, tente novamente.");
    }
}

function cadastrar() {
    const nome = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const senha = document.getElementById("registerPassword").value;
    const confirmarSenha = document.getElementById("confirmPassword").value;

 
    if (usuarios[email]) {
        alert("E-mail já cadastrado. Por favor, use outro e-mail.");
    } else if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
    } else {

        usuarios[email] = senha;
        alert(`Cadastro realizado com sucesso! Bem-vindo, ${nome}.`);
        window.location.href = "index2.html"
    }
}
