alert("Debe seleccionar un menu")

let menu = prompt ("Seleccione un menu")
switch (menu) {
    case "Carne":
        console.log ("Su carne sera ofrecida con bebida vino tinto");
        break;
    case "Pescado":
        console.log ("Su pescado ira con vino blanco");
        break;
    case "Verdura" :
        console.log ("Su verdura ira con agua");
        break;
    default:
        console.log ("Debe elegir Carne, pescado o verdura");
        break;
}