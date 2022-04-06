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

