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
let valorArs = 1;
let valorUsd = 550;
let valorBrl = 100;
let valorUyu = 50;

function tipoDeCambio() {
    let moneda = prompt("Ingrese el código de la moneda con la que desea operar").toLowerCase();

    switch (moneda) {
        case "ars":
            alert ("Moneda de Argentina\n1 ARS = " + valorArs + " ARS");
            break;

        case "usd":
            alert ("Moneda de Estados Unidos\n1 USD = " + valorUsd + " ARS");
            break;

        case "brl":
            alert ("Moneda de Brasil\n1 BRL = " + valorBrl + " ARS");
            break;

        case "uyu":
            alert ("Moneda de Uruguay\n1 UYU = " + valorUyu + " ARS");
            break;

        default:
            alert ("Moneda no reconocida");
            break;
    }
}

function convertirDivisas(cantidad, tasaDeCambio) {
  // Utilizamos un switch para determinar la tasa de cambio según la moneda de origen
  switch (monedaOrigen) {
      case "ars":
          cantidadConvertida = convertirDivisas(cantidad, valorArs);
      break;

      case "usd":
          cantidadConvertida = convertirDivisas(cantidad, valorUsd);
      break;

      case "brl":
          cantidadConvertida = convertirDivisas(cantidad, valorBrl);
      break;

      case "uyu":
          cantidadConvertida = convertirDivisas(cantidad, valorUyu);
      break;

      default:
          cantidadConvertida = "Moneda no reconocida";
      break;
      }

      alert(`Cantidad convertida: ${cantidadConvertida}`);

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

           // Pedimos al usuario que ingrese la cantidad a convertir y la moneda de origen
        let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero que desea cambiar"));
        let monedaOrigen = prompt("Ingrese el código de la moneda de origen (ARS, USD, BRL o UYU)").toLowerCase();
        let cantidadConvertida;
           convertirDivisas (cantidad, tasaDeCambio);
        }
}else {
    alert ("No puede operar en el mercado cambiario.");
}
    



    
