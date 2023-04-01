let nombre = prompt("Ingrese su nombre")
console.log(nombre)


function presupuestoAlianza() {
    let presupuesto = Number(prompt("ingrese su presupuesto"))
    let alianzas = 0
    if (presupuesto < 40000) {
        let alianzas = "de plata y oro"
    } 
    if (presupuesto < 80000) {
        let alianzas = "de oro hasta 4gr las dos"
    } 
    if (presupuesto < 150000) {
        let alianzas = "de oro hasta 8gr"
    }
    if (presupuesto > 150000) {
        let alianzas = "de oro y brillateria incluida"
    } 
    alert ("el tipo de alianzas que se puede fabricar seria de" , {alianzas})
}
presupuestoAlianza ()
