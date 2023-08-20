/*Nombre y Edad*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
function saludar(){
    let saludo = "Bienvenido/a a TRAM: su casa de cambio de confianza."
    alert (saludo);
}

while (nombre === "" || apellido === "") {
        alert("Debe ingresar nombre y apellido.");
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
} 

saludar();

let edad = Number(prompt("Ingrese su edad"));
// let valorArs = 1;
// let valorUsd = 550;
// let valorBrl = 100;
// let valorUyu = 50;

// function tipoDeCambio() {
//     let moneda = prompt("Ingrese el código de la moneda con la que desea operar USD, BRL o UYU").toLowerCase();

//     switch (moneda) {
//         case "usd":
//             alert ("Moneda de Estados Unidos\n1 USD = " + valorUsd + " ARS");
//             break;

//         case "brl":
//             alert ("Moneda de Brasil\n1 BRL = " + valorBrl + " ARS");
//             break;

//         case "uyu":
//             alert ("Moneda de Uruguay\n1 UYU = " + valorUyu + " ARS");
//             break;

//         default:
//             alert ("Moneda no reconocida");
//             break;
//     }
// }

// function convertirDivisas(cantidad, tasaDeCambio, monedaOrigen) {
//     // Switch para determinar la tasa de cambio según la moneda de origen
//     switch (monedaOrigen) {
//       case "usd":
//         return cantidad * tasaDeCambio;
  
//       case "brl":
//         return cantidad * tasaDeCambio;
  
//       case "uyu":
//         return cantidad * tasaDeCambio;
  
//       default:
//         return "Moneda no reconocida";
//     }
//   }

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
            alert ("No puede operar en el mercado cambiario");
        } else{
            alert ("Puede operar en el mercado cambiario.");

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

    if (!isNaN(valorMonto) && valorMonto >= 1000) {
        monto.className = "rojo";
    } else{
        monto.className = "verde";
    }
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;

  if(inputs[0].value === ""){
    alert("Campo Obligatorio")
  } else if(inputs[1].value === "Elija la moneda con la que desea operar"){
    alert("Elija una moneda")
  } else{
    alert("Campos completados correctamente.")
  }
});


  

