/*Nombre y Edad*/

let nombre = localStorage.getItem("nombre");
let apellido = localStorage.getItem("apellido");
let edad = localStorage.getItem("edad");

if (nombre === null || apellido === null || edad === null) {
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  edad = Number(prompt("Ingrese su edad"));

  while (nombre === "" || apellido === "" || isNaN(edad)) {
    alert("Debe ingresar nombre, apellido y edad válida.");
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    edad = Number(prompt("Ingrese su edad"));
  }

  localStorage.setItem("Nombre", nombre);
  localStorage.setItem("Apellido", apellido);
  localStorage.setItem("Edad", edad);

  
  Swal.fire(`Bienvenido/a a TRAM: su casa de cambio de confianza, ${nombre} ${apellido}.`);
} else {
  
  Swal.fire(`Bienvenido/a nuevamente a TRAM, ${nombre} ${apellido}.`);
}


// Objeto que almacena las tasas de cambio
let tasasDeCambio = {
    usd: 550,
    brl: 100,
    uyu: 50
  };
  
  function tipoDeCambio() {
    let moneda = prompt("Ingrese el código de la moneda con la que desea operar: USD, BRL o UYU").toLowerCase();
    if (moneda in tasasDeCambio) {
        alert(`1 ${moneda.toUpperCase()} = ${tasasDeCambio[moneda]} ARS`);
      } else {
        alert("Moneda no reconocida");
      }
  }
  
  function convertirDivisas(cantidad, tasaDeCambio) {
        return cantidad * tasaDeCambio;
    }
  

if (edad >= 18){
    let subsidio = prompt ("Es usted beneficiario del subsidio a las tarifas de electricidad, gas y agua?").toLowerCase();
        if(subsidio === "si"){
            alert("No puede operar en el mercado cambiario");
        } else{
            alert("Puede operar en el mercado cambiario.");

           //Para realizar el cambio de divisas debe ingresar su nro de DNI, el de su madre y el de su padre

            for (let i = 1; i <= 3; i++) {
                let dni = Number(prompt("Ingrese primero su DNI, luego el DNI de su madre, y por último, el DNI de su padre"));
                   alert(`Número #${i} DNI ${dni}`);
           }
           alert ("Se registraron los 3 DNIs")

           //Seleccione la moneda
           tipoDeCambio();

           // Pido al usuario que ingrese la cantidad a convertir y la moneda de origen
        let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero que desea cambiar a pesos argentinos"));
        let monedaOrigen = prompt("Ingrese el código de la moneda de origen (USD, BRL o UYU)").toLowerCase();
        let tasaDeCambio = tasasDeCambio[monedaOrigen];

        if (tasaDeCambio !== undefined) {
            let cantidadConvertida = convertirDivisas(cantidad, tasaDeCambio);
            alert(`Cantidad convertida: ${cantidadConvertida} ARS`);
          } else {
            alert("Moneda no reconocida");
          }

        
        //Seleccion de sucursal en donde se retirará el dinero cambiado a ARS
        class SucursalCasaDeCambio {
            constructor (sucursal, nombre, direccion, imagen){
        
                this.sucursal = sucursal
                this.nombre = nombre
                this.direccion = direccion;
                this.imagen = imagen;
            }
        }
        
        const sucursales = [];

        sucursales.push(new SucursalCasaDeCambio("CABA","TRAM: Sucursal Almagro", "Av. Medrano 1556", "http://"));
        sucursales.push(new SucursalCasaDeCambio("Provincia de Buenos Aires","TRAM: Sucursal Valentin Alsina", "Murgiondo 388", "https://"));

        let elegirSucursal = prompt("Usted reside en CABA o en Provincia de Buenos Aires? Escriba CABA o Provincia de Buenos Aires, dependiendo de la localidad.").toLowerCase();
        let sede;

        for (let index = 0; index < sucursales.length; index++) {
        if (sucursales[index].sucursal.toLowerCase() === elegirSucursal) {
            sede = sucursales[index];
            break;
            }
        }

        if (sede) {
            alert(`Perfecto! Ha seleccionado ${sede.nombre} en ${sede.direccion} ${sede.sucursal}. Lo esperamos de Lunes a Viernes de 10 a 18hs.`);
        } else {
            alert("Selección inválida. Por favor, elige entre CABA o Provincia de Buenos Aires.");
        }

       // .filter()
        let mostrarTodas = prompt("¿Deseas conocer todas las sucursales? (Sí / No)").toLowerCase();

        if (mostrarTodas === "sí" || mostrarTodas === "si") {
        let todasLasSucursales = sucursales.filter(sucursal => true);

            if (todasLasSucursales.length > 0) {
                alert("Información de todas las sucursales:");

                todasLasSucursales.forEach(sucursal => {
                alert(`
                 Sucursal: ${sucursal.sucursal}
                 Nombre: ${sucursal.nombre}
                 Dirección: ${sucursal.direccion}
                 `);
                });
            } else {
                alert("No se encontraron sucursales.");
            }
        } else {
             alert("Gracias por tu respuesta. ¡Hasta luego!");
        }
        }
}else {
    alert ("No puede operar en el mercado cambiario.");
}
    
  
//HTML a Javascript

const seleccionarMoneda = document.getElementsByTagName("select")[0];
const mensajeMoneda = document.getElementById("mensaje-moneda");

// Agrego evento al formulario para mostrar el mensaje
seleccionarMoneda.addEventListener("change", function() {
  const monedaSeleccionada = seleccionarMoneda.value;

  if (monedaSeleccionada === "usd") {
    mensajeMoneda.innerHTML = "Usted está seleccionando: Dolares Americanos";
    mensajeMoneda.className = "mensaje-usd";
  } else if (monedaSeleccionada === "brl") {
    mensajeMoneda.innerHTML = "Usted está seleccionando: Reales";
    mensajeMoneda.className = "mensaje-brl";
  } else if (monedaSeleccionada === "uyu") {
    mensajeMoneda.innerHTML = "Usted está seleccionando: Pesos Uruguayos";
    mensajeMoneda.className = "mensaje-uyu";
  }
});

let monto = document.getElementById("monto");

monto.addEventListener("keyup", (e) => {
    const valorMonto = parseFloat(monto.value);
    //Operador Ternario
    !isNaN(valorMonto) && valorMonto >= 1000 ? monto.className = "rojo" : monto.className = "verde";

    // if (!isNaN(valorMonto) && valorMonto >= 1000) {
    //     monto.className = "rojo";
    // } else{
    //     monto.className = "verde";
    // }
});

let info = [];
let formulario = document.getElementById("formulario");
let historial = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;

  if(inputs[0].value === ""){
    alert("Campo Obligatorio")
  } else if(inputs[1].value === "Elija la moneda con la que desea operar"){
    Swal.fire({
      icon: 'error',
      title: 'Imposible realizar transacción',
      text: 'Debe elegir una moneda',
    })
  } else{
    let conversion = {
        monto: parseFloat(inputs[0].value),
        moneda: inputs[1].value,
      };
    
    info.push(conversion);
    
    // alert(JSON.stringify(info));

    let tasaDeCambio = tasasDeCambio[conversion.moneda];
    let montoConvertido = conversion.monto * tasaDeCambio;

    
    Swal.fire(
      'Operación exitosa',
      `Monto convertido: ${montoConvertido} ARS`,
      'success'
    );

    //JSON

    localStorage.setItem("conversion", JSON.stringify(conversion));
    //Creo una copia local del historial almacenado en el almacenamiento local. La uso para mostrar la información de conversiones que realizo el usuario en la web. 
    let historialStorage = localStorage.getItem("historial") || [];
    historial.push(conversion);
    localStorage.setItem("historial", JSON.stringify(historial));
  }

  // Limpio el contenido anterior del historial antes de llenarlo nuevamente
  let historialDiv = document.getElementById("historialDiv");
  historialDiv.innerHTML = "";

  historial.forEach((conversion) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <b>Monto: ${conversion.monto}</b>
      <p>Moneda: ${ conversion.moneda}</p>
    `;
    div.className = "estilar";
    historialDiv.appendChild(div);
  });

  // Botón de eliminar historial
    let eliminar = document.getElementById("eliminarHistorial");


    eliminar.addEventListener("click", () => {
    // Elimino los datos de historial del almacenamiento local
    localStorage.removeItem("historial");
  
    // Limpio el contenido anterior del historial en el DOM
    let historialDiv = document.getElementById("historialDiv");
    historialDiv.innerHTML = "";
  });
  

});


//FETCH
let listado = document.getElementById ("listado");

fetch('https://sofiagurlekian.github.io/PreEntrega3-Javascript-Gurlekian/data.json')
.then(response => response.json())
.then((data) => {
  data.forEach(tasa => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3> Moneda: ${tasa.moneda} </h3>
    <p> Valor: ${tasa.valor} ARS </p>
    `;

    listado.append(li);
  });  
})

