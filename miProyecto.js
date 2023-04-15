let nombre = prompt("Ingrese su nombre")
console.log(nombre)


function presupuestoAlianza() {
    let presupuesto = Number(prompt("ingrese su presupuesto"))
    while (presupuesto === 0) {
        let presupuesto = Number(prompt("ingrese un presupuesto"))
    }
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
    alert ("el tipo de alianzas que se puede fabricar seria de" + " " + alianzas)
}
presupuestoAlianza ()

class productos {
    constructor (nombre , ancho) {
        this.nombre = nombre;
        this.ancho = ancho;
    }
}

const media_caña = new productos ("alianza media caña", "de 2mm a 5mm")
const cinta = new productos ("alianza cinta", "de 3mm a 6mm")
const bvulgari = new productos ("alianza bvlgari", "de 5mm a 10mm")

const arrayAlianzas = [media_caña, cinta, bvulgari]

arrayAlianzas.forEach(element => {
    const div = document.createElement ("div");
    div.innerHTML = `<p> Nombre del produco: ${productos.nombre} </p> 
                     <p> Ancho posible del producto: ${productos.ancho}
                     <button> Ver mas sobre el producto </button>`;
});