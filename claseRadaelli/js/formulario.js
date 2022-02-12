class Cliente {                                              //Creo objeto cliente
    constructor(datos_formulario) {
        this.nombre = datos_formulario.nombre;              //Defino los 6 atriubutos que tendrá 
        this.apellido = datos_formulario.apellido;
        this.email = datos_formulario.email;
        this.telefono = datos_formulario.telefono
        this.seleccionado = datos_formulario.seleccionado;
        this.comentario = datos_formulario.comentario;
    }
}//==============================================================================================================================================




//==============================================Funcion para validar el formulario==============================================================
function enviarDatos() {

    let nombre_cliente = document.getElementById('nombre').value;     //Guardo en una variable el valor que posee el elemento cuyo id=nombre
    let apellido_cliente = document.getElementById('apellido').value;           //  ""
    let email_cliente = document.getElementById('email').value;                 //  ""
    let telefono_cliente = document.getElementById('telefono').value;           //  ""
    let seleccion_cliente = document.getElementById('seleccionado').value;      //  ""    
    let comentario_cliente = document.getElementById('comentarios').value;      //  ""

    //CONDICIONES A CUMPLIR PARA CADA CAMPO:
    if ((nombre_cliente == "" ) || (nombre_cliente.length <= 2 )|| (nombre_cliente.length > 40)){
        mostrarError (true, "Ingrese un nombre  valido");
        return false;
    } else {
        mostrarError(false, "");
    } 
    
    if ((apellido_cliente == "" ) || (apellido_cliente.length <= 2 )|| (apellido_cliente.length > 40)){
        mostrarError (true, "Ingrese un apellido valido");
        return false;
    } else {
        mostrarError(false, "");
    }  

    if ((email_cliente == "" ) || (email_cliente.length <= 3 )|| (email_cliente.length > 40)){
        mostrarError (true, "Ingrese un email valido");
        return false;
    } else {
        mostrarError(false, "");
    }  
    
    if ((telefono_cliente == "" ) || (telefono_cliente.length <= 3 )|| (telefono_cliente.length > 40)){
        mostrarError (true, "Ingrese un telefono valido");
        return false;
    } else {
        mostrarError(false, "");
    }  

    if (seleccion_cliente == "Motivo de su consulta"){
        mostrarError (true, "Seleccione un tema relacionado a su consulta");
        return false;
    } else {
        mostrarError(false, "");
    }  
    
    
    guardarDatos(nombre_cliente, apellido_cliente,email_cliente,telefono_cliente, seleccion_cliente, comentario_cliente);
    mostrarMensaje("Datos almacenados con éxito en localStorage");
    //document.getElementById("formulario").submit();
  
}//============================================================================================================================================




//=============================================================================================================================================
function mostrarError(estado, mensaje) {
    if (estado) {
        document.getElementById("resultado").innerHTML = "<p class='p-3 mb-2 bg-danger text-white text-center'>" + mensaje + "</p>";
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
}//===========================================================================================================================================



//=============================================================================================================================================
//La siguiente funcion guarda los atributos vinculandolos en un objeto, y se guardan en localStorage, en formato JSON

function guardarDatos(nombre_cliente, apellido_cliente, email_cliente, telefono_cliente, seleccion_cliente, comentario_cliente) {
    let cliente = new Cliente({nombre:nombre_cliente, apellido:apellido_cliente, email:email_cliente, telefono:telefono_cliente, seleccionado:seleccion_cliente, comentario: comentario_cliente});
    localStorage.setItem("datos_formulario", JSON.stringify(cliente));
}//===========================================================================================================================================




//=============================================================================================================================================
function mostrarMensaje(mensaje) {
    document.getElementById("resultado").innerHTML = "<p class='p-3 mb-2 bg-success text-white text-center'>" + mensaje + "</p>";
}//============================================================================================================================================





//=============================================================================================================================================
//Esta funcion obtendra datos_formulario, que fue guardado en localStorage. Gracias al metodo parse convertirá los datos que están en formato JSON
//Luego los vaciará y los pasará a guardarDatos, por parámetro, donde seran guardados 

function borrarLocal() {
    let cliente = JSON.parse(localStorage.getItem("datos_formulario"));
    cliente.nombre = "";
    cliente.apellido = "";
    cliente.email = "";
    cliente.telefono = "";
    cliente.seleccionado = "";
    cliente.comentario = "";
    guardarDatos(cliente.nombre, cliente.apellido, cliente.email, cliente.telefono, cliente.seleccionado, cliente.comentario);
    mostrarMensaje("Datos borrados de localStorage con exito");
}//============================================================================================================================================


//Asigno el Evento "Click" al Botón "Enviar"
document.getElementById("enviarDatos").addEventListener("click", enviarDatos);


//Asigno el Evento "Click" al Botón "borrarLocalStorage"
document.getElementById("borrarLocal").addEventListener("click", borrarLocal);







