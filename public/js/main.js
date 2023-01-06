const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const textArea = document.querySelector("#text-to-encrypt");
const btnCopyText = document.querySelector("#copy-text-result");
const containerItems = document.querySelector("#container-items");
const containerResultEncrypt = document.querySelector("#container-result-encrypt");
const containerResultEncryptP = document.querySelector("#container-result-encrypt-p");
const pattern = new RegExp(/^[A-Za-z\s]+$/g);

function encrypter(textToEncrypt){
    textToEncrypt = textToEncrypt.replaceAll('e', 'enter');
    textToEncrypt = textToEncrypt.replaceAll('i', 'imes');
    textToEncrypt = textToEncrypt.replaceAll('a', 'ai');
    textToEncrypt = textToEncrypt.replaceAll('o', 'ober');
    textToEncrypt = textToEncrypt.replaceAll('u',  'ufat');
    return textToEncrypt;
}

function decryption(textToDecrypt){
    textToDecrypt = textToDecrypt.replaceAll('enter', 'e');
    textToDecrypt = textToDecrypt.replaceAll('imes', 'i');
    textToDecrypt = textToDecrypt.replaceAll('ai', 'a');
    textToDecrypt = textToDecrypt.replaceAll('ober', 'o');
    textToDecrypt = textToDecrypt.replaceAll('ufat',  'u');
    return textToDecrypt;
}

function showResult(text){
    containerItems.style.display = 'none';
    containerResultEncrypt.style.display = 'flex';
    containerResultEncryptP.innerHTML = text;
}

function copyToClipBoard(){
    navigator.clipboard.writeText(containerResultEncryptP.innerHTML).then();
}

btnEncrypt.addEventListener('click', ()=>{
    if(textArea.value !== "" && pattern.test(textArea.value)){
        const result = encrypter(textArea.value.toLowerCase());
        showResult(result);
    }else{
        containerResultEncrypt.style.display = 'none';
        containerItems.style.display = 'block';
    }
});

btnDecrypt.addEventListener('click', ()=>{
    if(textArea.value !== "" && pattern.test(textArea.value)){
        const result = decryption(textArea.value.toLowerCase());
        showResult(result);
    }else{
        containerResultEncrypt.style.display = 'none';
        containerItems.style.display = 'block';
    }
});

btnCopyText.addEventListener('click', copyToClipBoard);
