


document.getElementById("mostrarTextoEn").style.visibility = "hidden";
document.getElementById("copiarTexto").style.visibility = "hidden";


function vaciar (control){
    control.value ='';
}

function copiarTexto (){

    let texto = document.getElementById("mostrarTextoEn");
    navigator.clipboard.writeText(texto.value);

}



function obtenerTexto (){
    let texto = document.getElementById("textoEncriptar").value.trim();
    const regxs = {
        "acentos": /[\u0300-\u036f]/g,
        "upper": /^[A-Z0-9 ]+$/
    }
    let auxEncriptar = "";
    const mayusculas = regxs.upper.test(texto);
      
    if(texto != ""){
        
        if( mayusculas == false){
            auxEncriptar = texto.replaceAll("e", "enter");   
            texto = auxEncriptar

            auxEncriptar = texto.replaceAll("i", "imes"); 
            texto = auxEncriptar
            
            auxEncriptar = texto.replaceAll("a", "ai"); 
            texto = auxEncriptar
                
            auxEncriptar = texto.replaceAll("o", "ober"); 
            texto = auxEncriptar
                
            auxEncriptar = texto.replaceAll("u", "ufat"); 
            texto = auxEncriptar     
                
            
            document.getElementById("mostrarTextoEn").style.visibility = "visible";
            document.getElementById("textoEimagen").style.visibility = "hidden";
            document.getElementById("copiarTexto").style.visibility = "visible";
            document.getElementById("mostrarTextoEn").value = texto ;
        }else{
            alert("Solo se permiten palabras o letras en minúsculas y sin acentos");
        }
        

    }else{
        alert("Escriba algo para poder encriptarlo");
    }
         
}


function desencriptarTexto (){
    let textoEncriptado = document.getElementById("textoEncriptar").value.trim();
    
    let auxDesencriptar = "";

    const regxs = {
        "acentos": /[\u0300-\u036f]/g,
        "upper": /^[A-Z0-9 ]+$/
    }
    const mayusculas = regxs.upper.test(textoEncriptado);


    if(textoEncriptado != ""){
        
        if( mayusculas == false){
            auxDesencriptar = textoEncriptado.replaceAll("enter", "e");   
            textoEncriptado = auxDesencriptar

            auxDesencriptar = textoEncriptado.replaceAll("imes", "i"); 
            textoEncriptado = auxDesencriptar
            
            auxDesencriptar = textoEncriptado.replaceAll("ai", "a"); 
            textoEncriptado = auxDesencriptar
                
            auxDesencriptar = textoEncriptado.replaceAll("ober", "o"); 
            textoEncriptado = auxDesencriptar
                
            auxDesencriptar = textoEncriptado.replaceAll("ufat", "u"); 
            textoEncriptado = auxDesencriptar     
                
            
            document.getElementById("mostrarTextoEn").style.visibility = "visible";
            document.getElementById("mostrarTextoEn").value = textoEncriptado ;
        }else{
            alert("Solo se permiten palabras o letras en minúsculas y sin acentos");
        }
        
    }else{
        alert("Escriba algo para poder desencriptarlo");
    }
        
    
}