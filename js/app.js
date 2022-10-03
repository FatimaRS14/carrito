//variables para diferenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedor = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let listadoCarrito = [];


const agregarCurso= (e) => {
    e.preventDefault();
    //console.log("Presionaste en el div");
    //console.log(e.target);
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        const infoCurso ={
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent.addEventListener,
            //se le pone solo 1 por que es una valor estaticos que nostros definimos para el selector ya que no esta declarado directramente en el HTML
            cantidad: 1

        }
        //console.log(infoCurso);
        agregarCarrito(infoCurso);
    }
        
    }

    const agregarCarrito = curso =>{
        listadoCarrito = [...listadoCarrito, curso]
        console.log(listadoCarrito);
    }
    //forma tradicional :))
    /*function agregarCarrito(curso){

    }*/


const cargarEventListener = () => { 
    //agregar funcion de carga de cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();