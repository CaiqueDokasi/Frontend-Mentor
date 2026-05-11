const form = document.getElementById('iform');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span');
const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function erro(index){
    campos[index].style.border = '2px solid #ff7a7a'
    spans[index].style.display = 'block';
}

function removerErro(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none';
}

function validacaoNome(){
    if(campos[0].value.length < 3)
    {
        erro(0);
    }
    else{
        removerErro(0);
    }
}
function validacaoEmail(){
    if(!emailregex.test(campos[2].value)){
        erro(2);
    }
    else{
        removerErro(2);
    }
}

function validacaoSenha(){
    if(campos[3].value.length < 8){
        erro(3);
    }
    else{
        removerErro(3);
    }
}
