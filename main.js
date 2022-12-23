//TODO: Se llaman los elementos que usaremos para darle interactividad a nuestra pagina.
let textArea = document.getElementById("textarea");
let textoEncriptado = document.getElementById("texto-encriptado");
const btnEncriptar = document.getElementById("encriptar");
const btnDesEncriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const textos = document.getElementById("textos");

//?Llamamos a nuestro boton encriptar y le damos un evento de escucha
btnEncriptar.addEventListener("click", () => {
  /*
    *Hacemos una condicional, la cual nos valida si el valor del area de texto es diferente a vacia
    ?Si se cumple la condicion tomamos el texto encriptado y llamamos a la function encriptar la cual tiene como parametro el valor del area de texto
    !Si no se cumple la condcion cambiamos unos estilos
  */
  if (textArea.value !== '') {
    textoEncriptado.innerText = encriptar(textArea.value);
    //?Lista de estilos
    /*
      *La caja textos la ocultamos
      *Mostramos el boton copiar
      *Mostramos el area de la encriptación
    */
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textoEncriptado.style.display = 'block';
  } else {
    //?Lista de estilos
    /*
      *La caja textos la mostramos y le damos un display flex, para que nos aplique los estilos anteriores
      *Reseteamos el area de la encriptacion
      *Ocultamos el boton copiar
      *Ocultamos el area de la encriptación
    */
    textos.style.display = 'flex';
    textoEncriptado.innerText = '';
    textoEncriptado.style.display = 'none';
    btnCopiar.style.display = 'none'
  }
});

//?Llamamos a nuestro boton desencriptar y le damos un evento de escucha
btnDesEncriptar.addEventListener('click', ()=>{
  /*
    *Hacemos una condicional, la cual nos valida si el valor del area de texto es diferente a vacia
    ?Si se cumple la condicion tomamos el texto encriptado y llamamos a la function desEncriptar la cual tiene como parametro el valor del area de texto
    !Si no se cumple la condcion cambiamos unos estilos
  */
  if (textArea.value !== '') {
    textoEncriptado.innerText = desEncriptar(textArea.value);
    //?Lista de estilos
    /*
      *La caja textos la ocultamos
      *Mostramos el boton copiar
      *Mostramos el area de la encriptación
    */
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textoEncriptado.style.display = 'block';
  } else {
    //?Lista de estilos
    /*
      *La caja textos la mostramos y le damos un display flex, para que nos aplique los estilos anteriores
      *Reseteamos el area de la encriptacion
      *Ocultamos el boton copiar
      *Ocultamos el area de la encriptación
    */
    textos.style.display = 'flex';
    textoEncriptado.innerText = '';
    textoEncriptado.style.display = 'none';
    btnCopiar.style.display = 'none'
  }
})

//?Llamamos a nuestro boton copiar y le damos un evento de escucha
btnCopiar.addEventListener('click', ()=>{
  /*
    *Navigator.clipboard nos permite acceder a la funcionalidades del portapapeles del sistema
    *writeText nos permite copiar lo que le demos como parametro
  */
  navigator.clipboard.writeText(textoEncriptado.textContent)
})

//*Esto es un diccionario para hacer una busqueda
const diccionarioEncriptado = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

//TODO: FUNCIONES
//*Esta funcion tiene como parametro un texto
function encriptar(texto){
  //*Creamos una variable la cual almacenara nuestra palabra encriptada
  let encriptedText = '';
  //*Hacemos un bucle for por la longitud que tiene nuestro texto
  for(let i = 0; i<texto.length; i++){
    //*Creamos una variable la cual almacenara la iteracion de cada letra que contiene el texto
    const letter = texto[i];
    //*Hacemos una condicional la cual le estamos preguntado que si la letra esta en el diccionario que creamos anteriormente
    /*
      ?Si se cumple la condicion hacemos una suma iterativa a la variable reemplazando nuestra letra con lo que tenemos en el diccionario
      !Si no se cumple la condcion solo añadimos la letra a nuestra variable
    */
    if(letter in diccionarioEncriptado){
      encriptedText += diccionarioEncriptado[letter]
    } else {
      encriptedText += letter;
    }
  }
  //*Retornamos nuestra variable, la cual contiene el texto encriptado
  return encriptedText;
}

//*Esta funcion tiene como parametro un texto
function desEncriptar(texto){
  //*Creamos una variable la cual almacenara nuestra palabra desencriptada
  let palabra = '';
  //*Hacemos una condicional, la cual dice que si nuestro texto es diferente de vacio reemplazara las palabras con sus respectivas letras 
  if(texto !== ''){
    palabra += texto.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
  }
  //*Retornamos nuestra variable con la palabra desencriptada
  return palabra
} 

