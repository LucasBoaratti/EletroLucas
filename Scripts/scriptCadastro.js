function telefone() { //Declarando a função do telefone
    window.alert("Telefone da loja: (19) 98765-4321. Bom atendimento!"); //Adicionando um popup de aviso quando o usuário clicar no telefone
}

document.getElementById('formularioId').addEventListener('submit', function(event) { //Pegando o ID do formulário e declarando o evento de clique
    event.preventDefault(); //Evita que o formulário seja enviado com os dados vazios

    document.getElementById('erroNome').textContent = ''; //Colocando a mensagem de erro para o campo nome
    document.getElementById('erroEmail').textContent = ''; //Colocando a mensagem de erro para o campo email
    document.getElementById('erroSenha').textContent = ''; //Colocando a mensagem de erro para o campo senha
    document.getElementById('erroConfirmarSenha').textContent = ''; //Colocando a mensagem de erro para o campo confimar senha

    const nome = document.getElementById('nome').value.trim(); //Pegando os dados do formulário (nome)
    const email = document.getElementById('email').value.trim(); //Pegando os dados do formulário (email)
    const senha = document.getElementById('senha').value.trim(); //Pegando os dados do formulário (senha)
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim(); //Pegando os dados do formulário (confimarSenha)
    let validar = true; //Declarando a função validar para true (ela servirá para validar os dados do formulário)

    if (nome === '') { //Verificando as possíveis validações para o nome
        document.getElementById('erroNome').textContent = 'Por favor, insira seu nome.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    } else if (nome.length < 4) { //Verificando se o nome tem menos que 4 letras
        document.getElementById('erroNome').textContent = 'O nome deve ter pelo menos 4 letras.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    }

    if (email === '') { //Verificando as possíveis validações para o email
        document.getElementById('erroEmail').textContent = 'Por favor, insira um email.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    } else if (!validarEmail(email)) { //Verficando se o email é válido
        document.getElementById('erroEmail').textContent = 'Por favor, insira um email válido.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    }

    if (senha === '') { //Verificando as possíveis validações para a senha
        document.getElementById('erroSenha').textContent = 'Por favor, insira uma senha.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    } else if (!validarSenha(senha)) { //Verificando se a senha possui pelo menos 8 caracteres, letras maiúsculas e minúsculas e números
        document.getElementById('erroSenha').textContent = 'A senha deve ter pelo menos 8 caracteres, além disso deve incluir letras maiúsculas, minúsculas e números.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    } 

    if (confirmarSenha === '') { //Verificando as possíveis validações para a confirmação da senha
        document.getElementById('erroConfirmarSenha').textContent = 'Por favor, confirme sua senha.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar
    } else if (senha != confirmarSenha) { //Verificando se as senhas são iguais
        document.getElementById('erroConfirmarSenha').textContent = 'As senhas são diferentes, tente de novo.'; //Exibindo a mensagem de erro na tela
        validar = false; //A validação é falsa, então não irá avançar 
    }

    if (validar) { //Verificando a validação dos dados do formulário para continuar
        console.log('Nome: ', nome); //Caso queira enviar os dados para um banco de dados
        console.log('E-mail: ', email); //Caso queira enviar os dados para um banco de dados
        console.log('Senha: ', senha); //Caso queira enviar os dados para um banco de dados
        console.log('Confirmar Senha: ', confirmarSenha); //Caso queira enviar os dados para um banco de dados

        window.alert("Olá, seja bem vindo à EletroLucas. Aproveite a loja e boas compras!") //Exibindo um popup de boas vindas
        window.location.href = "Index.html"; //Levando o usuário para a página Index.html
    }

});

function validarEmail(email) { //Declando a função para validar o email
    const emailValidado = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Exibindo todos os tipos de caracteres válidos para o email
    return emailValidado.test(email); //Retornando o valor para a função
}

function validarSenha(senha) { //Declando a função para validar a senha
    const senhaValidada = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; //Exibindo todos os tipos de caracteres válidos para a senha
    return senhaValidada.test(senha); //Retornando o valor para a função
}