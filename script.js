document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('turmasContainer').style.display = 'block';
    }
};

function pesquisar() {

}

function atualizar() {
    
}

function deletar() {

}
