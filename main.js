/*Nombre y Edad*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
function saludar(){
    let saludo = "Bienvenido/a a TRAM: su casa de cambio de confianza."
    alert(saludo);
}

while (nombre === "" || apellido === "") {
        alert("Debe ingresar nombre y apellido.");
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
} 

saludar();

let edad = Number(prompt("Ingrese su edad"));
function tipoDeCambio() {
    let moneda = prompt("Ingrese el código de la moneda con la que desea operar").toLowerCase();

    let valorArs = 1;
    let valorUsd = 550;
    let valorBrl = 100;
    let valorUyu = 50;

    switch (moneda) {
        case "ars":
            alert("Moneda de Argentina\n1 ARS = " + valorArs + " ARS");
            break;

        case "usd":
            alert("Moneda de Estados Unidos\n1 USD = " + valorUsd + " ARS");
            break;

        case "brl":
            alert("Moneda de Brasil\n1 BRL = " + valorBrl + " ARS");
            break;

        case "uyu":
            alert("Moneda de Uruguay\n1 UYU = " + valorUyu + " ARS");
            break;

        default:
            alert("Moneda no reconocida");
            break;
    }
}




if (edad >= 18){
    let subsidio = prompt ("Es usted beneficiario del subsidio a las tarifas de electricidad, gas y agua?").toLowerCase();
        if(subsidio === "si"){
            alert ("No puede operar en el mercado cambiario");
        } else{
            alert ("Puede operar en el mercado cambiario.");

           //Saque un turno para realizar el cambio de divisas

            for (let turno = 1; turno <= 10; turno++) {
                let dni = Number(prompt("Ingrese su DNI con el que efectuará la transacción"));
                   alert(`Turno #${turno} DNI ${dni}`);
           }
           alert ("Se acabaron los turnos")

           //Seleccione la moneda
           tipoDeCambio();
           
        }    
} else{
    alert ("No puede operar en el mercado cambiario.");
}


    



    
