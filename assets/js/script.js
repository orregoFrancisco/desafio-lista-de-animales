

class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return (`El nombre del dueño es: ${this._nombre}, El domicilio es: ${this._direccion}, y el numero de telefono de contacto es ${this._telefono}`);
    }

}


class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    getTipo() {

        return (`El tipo de animal es un: ${this._tipo}`)
    }

}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nMascota = nMascota;
        this._enfermedad = enfermedad;
    }
    get nMascota() {
        return this._nMascota;
    }
    set nMascota(nuevoNmascota) {
        this._nMascota = nuevoNmascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }

    mascotaEnfermedad() {

        return (` mientras que el nombre de la mascota es: ${this._nMascota} ,y la enfermedad es: ${this._enfermedad}`)

    }
}

let form = document.querySelector("form");



let mostrar = (event) => {
    event.preventDefault()

    const nuevoNombreMascotaHtml = registrando()

    if (nuevoNombreMascotaHtml) {
        const data = document.getElementById('resultado');
        const ul = document.createElement("ul");
        ul.innerText = `${nuevoNombreMascotaHtml.datosPropietario()} ,${nuevoNombreMascotaHtml.getTipo()} , ${nuevoNombreMascotaHtml.mascotaEnfermedad()}`
        data.appendChild(ul)

        console.log(nuevoNombreMascotaHtml)

    }


}

function registrando() {
    let nombre = document.getElementById('propietario').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let direccion = document.getElementById('direccion').value.trim();
    let nMascota = document.getElementById('nombreMascota').value.trim();
    let enfermedad = document.getElementById("enfermedad").value.trim();
    let tipo = document.getElementById('tipo').value.trim();
    if (!nombre || nombre.length === 0) {
        alert("El nombre es requerido");
        return false;
    } if (!telefono || telefono.length === 0) {
        alert("Telefono es requerido");
        return false;
    } if (!direccion || direccion.length === 0) {
        alert("direccion es requerida");
        return false;
    } if (!nMascota || nMascota.length === 0) {
        alert("nombre de mascota es requerida");
        return false;
    } if (!enfermedad || enfermedad.length === 0) {
        alert("enfermedad es requerida");
        return false;
    } if (!tipo || tipo.length === 0) {
        alert("tipo de animal es requerida");
        return false;
    }

    let nuevoNombreMascota = new Mascota(nombre, direccion, telefono, tipo, nMascota, enfermedad);
    return nuevoNombreMascota;
}


form.addEventListener('submit', mostrar);