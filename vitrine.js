function botaoClicado() {
    const add = document.getElementById('mais');
    const checkbox = document.getElementById('termos');
    const desejo = document.getElementById('desejo');
    const email = document.getElementById('email').value;

    let msg;

    if (email === '') msg = prompt('Campo vazio! Digite seu email:');
    if (msg === '' || msg === null) alert('ERRO, email não encontrado!');

    let e_invalido = email.indexOf('@') == -1;
    if (e_invalido){
        add.innerText = '*Precisa conter um @';
        add.style.color = 'red';
    }

    let p_invalido = email.indexOf('.', email.indexOf('@')) == -1;
    if (p_invalido){
        add.innerText = '*Precisa conter um . após o @';
        add.style.color = 'red';
    }

    let mais_arroba = email.indexOf("@", email.indexOf("@") + 1) != -1;
    if (mais_arroba){
        add.innerText = '*Coloque somente um @';
        add.style.color = 'red';
    }
    
    else if (email.length < 10) {
        add.innerText = '*Mínimo de 10 caracteres';
        add.style.color = 'red';
    }
    else if (!checkbox.checked) {
        desejo.style.backgroundColor = 'red';
        add.style.color = 'white';
        add.innerText = 'Você precisa aceitar os termos de uso';
    }
    else if (checkbox.checked && email.length > 10 && !p_invalido && !e_invalido && !mais_arroba) {
        desejo.style.backgroundColor = null;
        add.innerText = null;
        alert(`Email ${email} cadastrado com sucesso!`);
    }

}

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
})
