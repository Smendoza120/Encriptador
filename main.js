let textArea = document.getElementById("textarea");
let textoEncriptado = document.getElementById("texto-encriptado");
const btnEncriptar = document.getElementById("encriptar");
const btnDesEncriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const textos = document.getElementById("textos");

btnEncriptar.addEventListener("click", () => {
  if (textArea.value !== '') {
    textoEncriptado.innerText = encriptar(textArea.value);
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textoEncriptado.style.display = 'block';
  } else {
    textos.style.display = 'flex';
    textoEncriptado.innerText = '';
    textoEncriptado.style.display = 'none';
  }
});

btnDesEncriptar.addEventListener('click', ()=>{
  if (textArea.value !== '') {
    textoEncriptado.innerText = desEncriptar(textArea.value);
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textoEncriptado.style.display = 'block';
  } else {
    textos.style.display = 'flex';
    textoEncriptado.innerText = '';
    textoEncriptado.style.display = 'none';
  }
})

btnCopiar.addEventListener('click', ()=>{
  navigator.clipboard.writeText(textoEncriptado.textContent)
})

const diccionarioEncriptado = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

function encriptar(texto){
  let encriptedText = '';
  for(let i = 0; i<texto.length; i++){
    const letter = texto[i];
    if(letter in diccionarioEncriptado){
      encriptedText += diccionarioEncriptado[letter]
    } else {
      encriptedText += letter;
    }
  }
  return encriptedText;
}

function desEncriptar(texto){
  let palabra = '';
  if(texto !== ''){
    palabra += texto.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
  }
  return palabra
} 

