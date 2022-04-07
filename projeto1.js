var selecione = document.getElementById('selecionar');
var inputCeasarCipher =  document.getElementById('numbercifradecesar');
var labelCeasarCipher = document.querySelector('.passosCC');
var steps = document.getElementById('cifra-de-cesar');

selecione.addEventListener('change', ()=>{
    if(selecione.value == 'cifradecesar'){
        inputCeasarCipher.style.display = 'inline-block';
        labelCeasarCipher.style.display = 'inline-block';
        steps.style.display = 'inline-block';
    }else {
        inputCeasarCipher.style.display = 'none';
        labelCeasarCipher.style.display = 'none';
        steps.style.display = 'none';
    }
});

var botaoCodificar = document.getElementById('codificar');
var botaoDecodificar = document.getElementById('decodificar');
var botaoEnviar = document.getElementById('submit');

botaoCodificar.addEventListener('change', ()=>{
    botaoEnviar.value = "Codificar Mensagem"
});
botaoDecodificar.addEventListener('change', ()=>{
    botaoEnviar.value = "Decodificar Mensagem"
});


function codificarCeasarCipher(str,chave){
    var newArr = []
    for(var i = 0; i<str.length ;i++){
        let code = str[i].charCodeAt()
        if(code >= 65  && code <= 90){
            newArr.push(String.fromCharCode(((code - 65 + chave )%26)+65))
        }else if(code >= 97 && code <= 122){
            newArr.push(String.fromCharCode(((code - 97 + chave )%26)+97))
        }else{
            newArr.push(str[i])
        }

    }
    return newArr.join('')
}

function decodificarCeasarCipher(str, chave){
    var newArr = []
    for(var i = 0; i<str.length ;i++){
        let code = str[i].charCodeAt()
        if(code >= 65  && code <= 90){
            newArr.push(String.fromCharCode(((code - 90 - chave )%26)+90))
        }else if(code >= 97 && code <= 122){
            newArr.push(String.fromCharCode(((code - 122 - chave )%26)+122))
        }else{
            newArr.push(str[i])
        }

    }
    return newArr.join('')
}

var enviarMensagem = document.getElementById('resultadocifrado');
var enviarTexto = document.getElementById('texto-resultado');

botaoEnviar.addEventListener('click', function(z){
    z.preventDefault();

    if(selecione.value === 'base64'){
        var texto = document.getElementById('mensagem').value;
        if(botaoEnviar.value === "Codificar Mensagem"){            
            enviarTexto.innerText = btoa(texto);
        }else{            
            enviarTexto.innerText = atob(texto);
        }
    }else if(selecione.value === 'cifradecesar'){
        if(botaoEnviar.value === "Codificar Mensagem"){
            var texto = document.getElementById('mensagem').value.split('');
            var deslocamento = parseInt(document.getElementById('numbercifradecesar').value);
           
            enviarTexto.innerText = codificarCeasarCipher(texto,deslocamento);
        }else{
            var texto = document.getElementById('mensagem').value;
            var deslocamento = parseInt(document.getElementById('numbercifradecesar').value);
       
            enviarTexto.innerText = decodificarCeasarCipher(texto,deslocamento);
        }
    }

});