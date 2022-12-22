let textArea = document.getElementById("textarea");
const btnEncriptar = document.getElementById("encriptar");
const btnDesEncriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const textos = document.getElementById("textos");
let textoEncriptado = document.getElementById("texto-encriptado");

btnEncriptar.addEventListener("click", () => {
  if (textArea.value !== '') {
    textoEncriptado.innerText = encriptar(textArea.value);
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textos.style.transition = ".3s linear";
  } else {
    textos.style.display = 'block';
    textoEncriptado.innerText = '';
  }
});

btnDesEncriptar.addEventListener('click', ()=>{
  if (textArea.value !== '') {
    textoEncriptado.innerText = desEncriptar(textArea.value);
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textos.style.transition = ".3s linear";
  } else {
    textos.style.display = 'block';
    textoEncriptado.innerText = '';
  }
})

btnCopiar.addEventListener('click', ()=>{
  navigator.clipboard.writeText(textoEncriptado.textContent)
})

function encriptar(palabra){
  let arreglo = [... palabra];

  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] === 'a'){
      arreglo[i] = 'ai';
    } else if(arreglo[i] === 'e'){
      arreglo[i] = 'enter';
    } else if(arreglo[i] === 'i'){
      arreglo[i] = 'imes';
    } else if(arreglo[i] === 'o'){
      arreglo[i] = 'ober';
    } else if(arreglo[i] === 'u'){
      arreglo[i] = 'ufat';
    }
  }
  return arreglo.join('');
}

const diccionarioEncriptado = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

const diccionarioDesEncriptado = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
}

function desEncriptar(texto){
  let textoDesEncriptado = '';
  let palabraActual = '';

  for(let i = 0; i < texto.length; i++){
    const letra = texto[i];
    if(letra in diccionarioDesEncriptado){
      palabraActual += letra
    } else {
      if(palabraActual in diccionarioDesEncriptado){
        textoDesEncriptado += diccionarioDesEncriptado[palabraActual];
      } else{
        textoDesEncriptado += palabraActual;
      }
      palabraActual = '';
      textoDesEncriptado += letra;
    }
  }

  if(palabraActual in diccionarioDesEncriptado){
    textoDesEncriptado += diccionarioDesEncriptado[palabraActual]
  } else {
    textoDesEncriptado += palabraActual;
  }
  return textoDesEncriptado;
} 

function encrypt(texto){
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

console.log(desEncriptar('Hoberlai'))

/*
 *asdwasdwas
*/
