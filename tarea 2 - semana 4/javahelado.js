alert("Debe seleccionar un toppin")

let topping = prompt ("Seleccione un topping");
let preciotopping;
let montofinal; 
let prhelado= 300;

if (topping.toLowerCase()=="oreo") {
    preciotopping=10;
    console.log ("Tu topping es de oreo")
}else if (topping.toLowerCase()=="kitkat") {
    preciotopping=15;
    console.log ("Tu topping es de kitkat")
}else if (topping.toLowerCase()=="kinder") {
    preciotopping=25;
    console.log ("Tu topping es de Kinder")
}else{
    preciotopping=0;
    console.log ("No tenemos ese toppin")
}
montofinal= prhelado+preciotopping;
console.log ("El helado cuesta $" + montofinal)