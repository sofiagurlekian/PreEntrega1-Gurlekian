/*Nombre y Edad*/

let nombre = prompt("Ingrese su nombre");
let saludo = "Bienvenido/a"
let mensajeCompleto = saludo + " " + nombre;
alert(mensajeCompleto);

let edad = Number(prompt("Ingrese su edad"));

if (edad >= 18){
    let subsidio = prompt ("Es usted beneficiario del subsidio a las tarifas de electricidad, gas y agua?").toLowerCase();
        if(subsidio === "si"){
            alert ("No puede operar en el mercado cambiario");
        } else{
            alert ("Puede operar en el mercado cambiario.")
        }    
} else{
    alert ("No puede operar en el mercado cambiario.");
}
