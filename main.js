// Inicio del Simulador
function bienvenida(){
    let nombre = prompt("Ingrese Su Nombre!")
    while((nombre === "") || (nombre === null)){
        alert(`Ingrese un dato valido!`);
        nombre = prompt("Introduzca su nombre correctamente!");
    }
    let saludo = `Hola ${nombre}, Bienvenido a la tienda de peliculas Online!`;
    alert(saludo);

    return nombre;
}

function validarEdad(){
    let edad = parseInt(prompt(`${nombre}, Ingrese Su Edad!`));

    if ((edad == " ") || (edad == null)){
        let mensaje = "Ingrese su Edad correctamente!"
        alert(mensaje);
        edad = prompt("Introduzca su edad correctamente!")
    } else if(edad <= 17){
        alert("A continuacion se te mostrara las peliculas mas vendidas de la pagina segun su Edad!");
        // alert(peliculasMenores.join("\n"))
    } else if( edad >= 18){
        alert("A continuacion se te mostrara las peliculas mas vendidas de la pagina segun su Edad!");
        // alert(peliculasMayores.join("\n"))
    }

    return edad;
}

class Peliculas {
    constructor(nombrePelicula,precio){
        this.nombre = nombrePelicula,
        this.precio = precio
    }

}

const peliculas  = new Peliculas("Soy leyenda", 780);
const peliculas2 = new Peliculas("Hasta el ultimo hombre", 800);
const peliculas3 = new Peliculas("Son como niños", 500);
const peliculas4 = new Peliculas("En busca de la felicidad", 900);

function SeleccionPelicula(){
    let lista = parseInt(prompt(`Elegi la pelicula que quiera comprar: \n \n 1- ${peliculas.nombre}   \n 2- ${peliculas2.nombre} \n 3- ${peliculas3.nombre} \n 4-${peliculas4.nombre} \n 5- Ir al Menu`));
    switch (lista) {
        case 1:
          peliculas
            alert(`Seleccionaste la pelicula: ${peliculas.nombre}`);
            break;
        case 2:
            peliculas2
            alert(`Seleccionaste la pelicula: ${peliculas2.nombre}`);
            break;
        case 3:
            peliculas3
            alert(`Seleccionaste la pelicula: ${peliculas3.nombre}`);
            break;
        case 4:
            peliculas4
            alert(`Seleccionaste la pelicula: ${peliculas4.nombre}`);
            break;
        case 5: 
            accion();
        default:
            alert("Elegir una opcion!");
            break;
    }
}

function accion(){
    menu = prompt(`Que accion quiere elegir? \n \n 1) Comprar \n 2) Mas vendidadas Adolescentes \n 3) Mas vendidadas Mayores \n 4) Finalizar`);
}

// Funcion para declarar el nombre y el precio de las peliculas -18
function peliculasAdolescentes(){
    let pelicula1 = "Harry Potter";
    let pelicula2 = "Los Increibles";
    let pelicula3 = "Dragon Ball";
    let pelicula4 = "Naruto";
    let precio1 = 1200;
    let precio2 = 800;
    let precio3 = 1500;
    let precio4 = 1300;
    alert(`Las peliculas mas vendidadas en la pagina categoria Adolescentes:  \n1- ${pelicula1} valor$: ${precio1} \n2- ${pelicula2} valor$: ${precio2} \n3- ${pelicula3} valor$: ${precio3} \n4- ${pelicula4} valor$: ${precio4} `);

}

// Funcion para declarar el nombre y el precio de las peliculas +18
function peliculasMayores(){
    let pelicula1 = "Soy leyenda";
    let pelicula2 = "Hasta el ultimo hombre";
    let pelicula3 = "Son como niños";
    let pelicula4 = "En busca de la felicidad";
    let precio1 = 780;
    let precio2 = 900;
    let precio3 = 1500;
    let precio4 = 1300;

    alert(`Las peliculas mas vendidadas en la pagina categoria Mayores:  \n1- ${pelicula1} valor$: ${precio1} \n2- ${pelicula2} valor$: ${precio2} \n3- ${pelicula3} valor$: ${precio3} \n4- ${pelicula4} valor$: ${precio4} `);

}

const proximamente = [
    {nombre: "Telefono negro", estrenoEnPagina: 2022},
    {nombre: "Spider Man no way home", estrenoEnPagina: 2022},
    {nombre: "Doctor Strange", estrenoEnPagina: 2022}
]

const prox1 = proximamente.map((valor) => valor.nombre);
const prox2 = proximamente.map((valor) => valor.estrenoEnPagina)
console.log(prox1);
console.log(prox2);

// // Declarancion de Arreglos
// const peliculasMenores = ["Harry potter ", "Los Increibles ", "Dragon Ball ", "Naruto "];
// const peliculasMayores = ["Soy leyenda ", "Hasta el ultimo hombre ", "Son como niños ", "En busca de la felicidad"];

// // Invocacion de Funciones
let nombre = bienvenida();
let edad = validarEdad(nombre);
accion();

while(menu !== "4"){
    if(menu === "1"){
        SeleccionPelicula();
    } else if(menu === "2"){
        peliculasAdolescentes()
        accion()
    } else if(menu === "3"){
        peliculasMayores()
        accion()
    } 
}

const titulo = document.getElementById("titulo");
titulo.innerHTML = "Tienda de Peliculas";
titulo.className = "tituloNombre"

































