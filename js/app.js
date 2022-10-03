//variables para diferenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
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
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1

        }
        //console.log(infoCurso);
        agregarCarrito(infoCurso);
    }
        
    }
     //ayuda de los array's
    const agregarCarrito = curso =>{
        listadoCarrito = [...listadoCarrito, curso]
        console.log(listadoCarrito);
        generaHTML();
    }
    //forma tradicional :))
    /*function agregarCarrito(curso){

    }*/

    const generaHTML = () =>{
        vaciarCarrito();
        listadoCarrito.forEach(curso => {
            const row = document.createElement('tr');
            const cursoHTML = `
            <td>
            <img src= "${curso.imagen}" width=100>
            </td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            
            `;
            row.innerHTML = cursoHTML;
            console.log(row)
            contenedorCarrito.appendChild(row);
        });
    }

    const vaciarCarrito = () =>{

        }
        
    const cargarEventListener = () => { 
        //agregar funcion de carga de cursos al carrito
        listaCursos.addEventListener('click', agregarCurso);
    }

    cargarEventListener();