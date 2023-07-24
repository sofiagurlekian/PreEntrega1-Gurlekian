/*Nombre y Edad*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");

while (nombre === "" && apellido === "") {
        alert("Debe ingresar nombre y apellido.");
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
} 

// let saludo = "Bienvenido/a"
// let mensajeCompleto = saludo + " " + nombre + " " + apellido;
//     alert(mensajeCompleto);

let edad = Number(prompt("Ingrese su edad"));

if (edad >= 18){
    let subsidio = prompt ("Es usted beneficiario del subsidio a las tarifas de electricidad, gas y agua?").toLowerCase();
        if(subsidio === "si"){
            alert ("No puede operar en el mercado cambiario");
        } else{
            alert ("Puede operar en el mercado cambiario.")

           //Saque un turno para realizar el cambio de divisas

            for (let turno = 1; turno <= 10; turno++) {
                let dni = Number(prompt("Ingrese su DNI con el que efectuará la transacción"));
                   alert(`Turno #${turno} DNI ${dni}`);
           }
           alert ("Se acabaron los turnos")

           //Seleccione la moneda

            let moneda = prompt("Ingrese el código de la moneda con la que desea operar").toLowerCase();

            switch (moneda) {
                case "ars":
                alert("Moneda de Argentina");
                break;

                case "usd":
                alert("Moneda de Estados Unidos");
                break;

                case "brl":
                alert("Moneda de Brasil");
                break;

                case "uyu":
                alert("Moneda de Uruguay");
                break;

                default:
                alert("Moneda no reconocida");
                break;
            }
        }    
} else{
    alert ("No puede operar en el mercado cambiario.");
}


    



    
