let letras=["e","i","o","a","u"] ;
let palabras=["enter", "imes", "ober", "ai","ufat"];


document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById("input-box");
    var textarea1 = document.getElementById("output-box");
    textarea.style.resize = "none";
    textarea1.style.resize = "none";
  });


function Encriptar(){
    let texto = (document.getElementById("input-box").value);
    for(let n = 0;n<5;n++){
        const regEx = new RegExp(letras[n], "g");
        const result = texto.replace(regEx , palabras[n]);
        texto=result;
        console.log(result);
        asignar_Texto_Elemento("output-box", `${result}`);
    }
}

function Desencriptar(){
    let texto1 = (document.getElementById("input-box").value);
    for(let n = 0;n<5;n++){
        const regEx = new RegExp(palabras[n], "g");
        const result = texto1.replace(regEx , letras[n]);
        texto1=result;
        console.log(result);
        asignar_Texto_Elemento("output-box", `${result}`);
    }
}

function asignar_Texto_Elemento(idTextarea, texto){
        // Obtener el elemento textarea por su ID
        const textarea = document.getElementById(idTextarea);
      
        // Si el textarea existe
        if (textarea) {
          // Asignar el valor del texto al textarea
          textarea.value = texto;
        } else {
            // Si no se encuentra el textarea, mostrar un mensaje de error
            console.error(`No se encontró el textarea con el ID "${idTextarea}".`);
          }
        }
function Copiar(idTextarea) {
    // Obtenemos el elemento textarea
    const textarea = document.getElementById(idTextarea);
          
    // Seleccionamos el texto del textarea
    textarea.select();
          
    // Copiamos el texto al portapapeles
    document.execCommand("copy");
          
    }