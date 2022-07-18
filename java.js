
let accion = [
  { ID: 1, nombre: "Grand Theft Auto V", categoria: "accion", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3yBxB9FClz4-TWtq-9RBWEwG0FNMmFDm-Q&usqp=CAU" },
  { ID: 2, nombre: "God of War", categoria: "accion", precio: 1500, Image: "https://http2.mlstatic.com/D_NQ_NP_911134-MLA40734624358_022020-V.jpg" },
  { ID: 3, nombre: "Far Cry 6", categoria: "accion", precio: 1500, Image: "https://store-images.s-microsoft.com/image/apps.13513.13991923467761409.c293ba7a-fc26-41d3-918c-3cd85c486a36.5582530f-7758-43f0-a606-9eeeda42fdf6" },
  { ID: 4, nombre: "Resident Evil", categoria: "accion", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_T0OCEuSrSw4y5Bzyrc49bPVNaHjMBySDBA&usqp=CAU" },
  { ID: 5, nombre: "Spider-Man", categoria: "accion", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsWAiZNchGGSV5fZYFI-aY8zpXxDzGfnOVQ&usqp=CAU" },
];

let aventura = [
  { ID: 6, nombre: "Evil Dead: The Game", categoria: "aventura", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgx_4geD6OnK16U1Jmf24jkCEO0PT3CBgjHQ&usqp=CAU" },
  { ID: 7, nombre: "Ghost of Tsushima", categoria: "aventura", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywYbVpHluZcuPAbyBt51x6gQ7Nwt6wNnCqg&usqp=CAU" },
  { ID: 8, nombre: "Uncharted 4 ", categoria: "aventura", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMibFqSe2w5zMYyL05gEg6Feg24i2YVMc4g&usqp=CAU" },
];

let terror = [
  { ID: 9, nombre: "Alan Wake", categoria: "terror", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pslrnGywNBBc-tmhH-nxM7ACvU5cMnqS9g&usqp=CAU" },
  { ID: 10, nombre: "Alien Isolation", categoria: "terror", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1RGzTp6xeoJfiuLdmf1UWM_rmY57znTySQ&usqp=CAU" },
  { ID: 11, nombre: "Amnesia: A Machine for Pigs", categoria: "terror", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOs-flx_vPhKeJ5q6CjAvQ1HPEQN9lsJia8Q&usqp=CAU" },
  { ID: 12, nombre: "Dead Space", categoria: "terror", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJt0paERSYnYlgbuP0YNkn6lBaSPleK7B_A&usqp=CAU" },
  { ID: 13, nombre: "outlast", categoria: "terror", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmjdNcwltz_7UGASSp67yHkqK2KsRaKR_9Q&usqp=CAU" },
];

let pelea = [
  { ID: 14, nombre: "Mortal Kombat 11", categoria: "pelea", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_CyG8Eq_C6y7qk_bzKPljlxWDwPt1MaKSA&usqp=CAU" },
  { ID: 15, nombre: "WWE 2K22", categoria: "pelea", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFk3ti-m7rQzRAu2GcRFv24IPkjX_CtG45g&usqp=CAU" },
  { ID: 16, nombre: "Super Smash Bros. Ultimate", categoria: "pelea", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8MojQ7gtfpegmEN3AwiWGsBRqx6a6Yj7Og&usqp=CAU" },
  { ID: 17, nombre: "Tekken 7", categoria: "pelea", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQov3Qxi_phy6hbZ_0ytrprgOtMPxYkW87vtQ&usqp=CAU" },
];

let puzzle = [
  { ID: 18, nombre: "Tetris Effect: Connected", categoria: "puzzles", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Vdqh-VDpN8gyRHAjkJmJ8sDTLueTuc020w&usqp=CAU" },
  { ID: 19, nombre: "Gorogoa", categoria: "puzzles", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TCy37vdox2Yt6r9mo1s90W0rULI7rOTntbQQUEpFLsE31av_Pfncku6qNJWev4MlzsA&usqp=CAU" },
  { ID: 20, nombre: "Unpacking", categoria: "puzzles", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMsxAKEcw0s1tAvNfIrC8vCpdEvDGkEYBEw&usqp=CAU" },
];

let total = 0



swal.fire({
  html: `Por favor acepte nuestros <a href="#">terminos y condiciones</a>`,
  confirmButtonText: `acepto`,
  background: "grey",
  icon: `info`,
  backdrop: true,
  position: `center`,
  allowOutsideClick: false,
  showCancelButton: false,
})


let listasAccion = document.getElementById("listaAccion")
let listasAventura = document.getElementById("listaAventura")
let listasTerror = document.getElementById("listaTerror")
let listasPelea = document.getElementById("listaPelea")
let listasPuzzle = document.getElementById("listaPuzzle")

mostrarJuegos(accion, listasAccion)
mostrarJuegos(aventura, listasAventura)
mostrarJuegos(terror, listasTerror)
mostrarJuegos(pelea, listasPelea)
mostrarJuegos(puzzle, listasPuzzle)

function mostrarJuegos(arr, list) {
  for (const juego of arr) {
    list.innerHTML += `<li class="col-sm-3 list-group-item">
        <img src=${juego.Image} width="250" height="250">
        <p> ${juego.nombre}</p>
        <p><strong>$ ${juego.precio}</strong></p>
        <button class="btn btn-danger" id="btn${juego.ID}">Comprar</button>
        </li>
        `;
  }
  arr.forEach(juego => {
    document.getElementById(`btn${juego.ID}`).addEventListener("click", function () {
      total = juego.precio + total
      agregarAlCarrito(juego);

    })
  });

}

//carrito
let carrito = JSON.parse(localStorage.getItem("carrito"))||[];

class productoCarrito {
  constructor(objProd) {
    this.ID = objProd.ID
    this.nombre = objProd.nombre
    this.categoria = objProd.categoria
    this.precio = objProd.precio
    this.image = objProd.image
    this.cantidad = 1
  }
}

function agregarAlCarrito(juegoCarrito) {
  let encontrado = carrito.find(p => p.ID == juegoCarrito.ID)

  if (encontrado == undefined) {
    let juegoAgregado = new productoCarrito(juegoCarrito)
    carrito.push(juegoAgregado)
 
    console.log(carrito);
    Swal.fire({
      title: juegoCarrito.nombre,
      text: `Se añadio al carrito  $${juegoCarrito.precio}`,
      icon: "success",
      background: "grey",
      backdrop: false,
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
      showConfirmButton: false,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    document.getElementById("Carrito").innerHTML+=(`
    <tr id="fila${juegoAgregado.ID}">
    <td> ${juegoAgregado.ID} </td>
    <td> ${juegoAgregado.nombre} </td>
    <td> ${juegoAgregado.precio} </td>
    <td id="${juegoAgregado.ID}"> ${juegoAgregado.cantidad}</td>
    <td> <button class="btn btn-light" onclick="eliminar(${juegoAgregado.ID})">Eliminar</button>
    </tr> 
    `)

  }else{

    let posicion=carrito.findIndex(p=>p.ID == juegoCarrito.ID)
    console.log(posicion);
    carrito[posicion].cantidad +=1
    document.getElementById(juegoCarrito.ID).innerHTML=carrito[posicion].cantidad

    Swal.fire({
      title: juegoCarrito.nombre,
      text: `Se añadio al carrito  $${juegoCarrito.precio}`,
      icon: "success",
      background: "grey",
      backdrop: false,
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
      showConfirmButton: false,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }

document.getElementById("total").innerHTML=(`Total: $ ${calcularTotal()}`)
localStorage.setItem("carrito",JSON.stringify(carrito))
}

function calcularTotal () {
  let suma=0
  for (const elemento of carrito) {
    suma = suma + (elemento.precio * elemento.cantidad)
  }
  return suma
}

 function eliminar(ID){
  let indice = carrito.findIndex(prod => prod.ID == ID)
  carrito.splice(indice,1)
  let fila = document.getElementById(`fila${ID}`)
  document.getElementById("Carrito").removeChild(fila)
  document.getElementById("total").innerText=(`Total: $ ${calcularTotal()}`)
  localStorage.setItem("carrito",JSON.stringify(carrito))
  
  Swal.fire({
    title: "Eliminado",
    text: `Se elimino del carrito con exito `,
    icon: "success",
    background: "grey",
    backdrop: false,
    timer: 3000,
    timerProgressBar: true,
    toast: true,
    position: "top-end",
    showConfirmButton: false,

    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
} 


//boton de finalizar compra

document.getElementById("finCompra").addEventListener("click", function(){
  formulario()
})


function formulario() {
  document.getElementById("contenedorFormulario").innerHTML+=(`

  <h3>Ingrese sus datos</h3>
  <div class="form-group">
  <label>Ingrese su nombre y apellido</label>
  <input class="form-control" type="text" placeholder="Nombre y apellido">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Ingrese su Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
  </div>
  <button id="borrarStorage" type="submit" class="btn btn-primary">Enviar</button>


  `)
 document.getElementById("borrarStorage").addEventListener("click", localStorage.removeItem("carrito"))
}



//dark mode

let modo = document.getElementById("switch")
let body = document.body

modo.addEventListener("click", function () {
  let val = body.classList.toggle("dark")
  modo.classList.toggle("active")
  localStorage.setItem("modo", val)
})

let valor = localStorage.getItem("modo")

if (valor == "true") {
  body.classList.add("dark")
} else {
  body.classList.remove("dark")
}