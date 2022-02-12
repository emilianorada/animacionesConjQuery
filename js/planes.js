class Presupuesto{                                         
    constructor(){
            this.planes = [];                   //Array de objetos, donde se almacenan los planes
            this.planesSeleccionados = [];      //Array donde se almacenan los items que van siendo seleccionados
            this.cargarPlanes();
    }

    cargarPlanes() {                    //Carga los planes al array
        this.planes.push({id: 1, nombre:"10 megas", precio: 100, imagen: "../images/10Mfibra.jpg"});
        this.planes.push({id: 2, nombre:"15 megas", precio: 150, imagen: "../images/15Mfibra.jpg"});
        this.planes.push({id: 3, nombre:"20 megas", precio: 200, imagen: "../images/20Mfibra.jpg"});
        this.planes.push({id: 4, nombre:"30 megas", precio: 300, imagen: "../images/30Mfibra.jpg"});
    }

    listarPlanes() {     //lista los planes y añade un escuchador del evento clic en cada uno de los planes
        for (const plan of this.planes) {        
                $('#mi-div').append(`<div class="plan pt-3 pb-2 mb-5 col-md-8"> <h4>Plan: ${plan.nombre}</h4>                         
                                <p>Precio: $ ${plan.precio}</p>
                                <img src= "${plan.imagen}" class="img_tam"><br><br>
                                <button id="btn${plan.id}" class="btn btn-info">Agregar al presupuesto </button></div> `);
                               
                                
                $(`#btn${plan.id}`).on('click',         //Declaracion del evento al seleccionar el boton "agregar al presupuesto"
                        () => {
                            this.agregarAPresupuesto(plan);
                        });  
        }
    }
    
    listarPresupuesto() {       //arma un listado de los items seleccionados
        $("#mi-presupuesto li").remove();
        for (const plan of this.planesSeleccionados) {
            $('#mi-presupuesto').append(`<li> ${plan.nombre}</li>`);
        }
    } 

    agregarAPresupuesto(planAAgregar) {
        this.planesSeleccionados.push(planAAgregar);    //añade al array "planes seleccionados", lo que le llegó por parametro, en la linea 24
        this.listarPresupuesto();
        this.actualizarTotal();
    }

    actualizarTotal() {             //Se encarga de calcular el .precio total, de todos los elementos los elementos que han sido seleccionados.
        const suma = this.planesSeleccionados.reduce((valp, obj) => valp + obj.precio, 0);
        $("#presupuesto-total").html("Presupuesto total: $"+ suma);
    }
 }
//=============================================================================================================================================================




const presupuesto = new Presupuesto();      //Instancia


$("#visualizar").one('click',       // "one" en jquery me permite que un evento sea ejecutado UNA sola vez
                        () => {
                            presupuesto.listarPlanes();                              
                        }
                    );

                 





        






































