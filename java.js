
const accion = [
  { ID: 1, nombre: "Grand Theft Auto V", categoria: "accion", precio: 1500, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3yBxB9FClz4-TWtq-9RBWEwG0FNMmFDm-Q&usqp=CAU"},
  { ID: 2, nombre: "God of War", categoria: "accion", precio: 1500, Image:"https://http2.mlstatic.com/D_NQ_NP_911134-MLA40734624358_022020-V.jpg" },
  { ID: 3, nombre: "Far Cry 6", categoria: "accion", precio: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2yHZ5N25rWmBZFs3tttiZWR9ca1CIwxfYQ&usqp=CAU"},
  { ID: 4, nombre: "Resident Evil", categoria: "accion", precio: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLoU2Ca81KBE9QID1mT8Bod7RVMQWqX4BFg&usqp=CAU" },
  { ID: 5, nombre: "Spider-Man", categoria: "accion", precio: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsWAiZNchGGSV5fZYFI-aY8zpXxDzGfnOVQ&usqp=CAU" },
];

const aventura = [
  { ID: 6, nombre: "Evil Dead: The Game", categoria: "aventura", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgx_4geD6OnK16U1Jmf24jkCEO0PT3CBgjHQ&usqp=CAU" },
  { ID: 7, nombre: "Ghost of Tsushima", categoria: "aventura", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywYbVpHluZcuPAbyBt51x6gQ7Nwt6wNnCqg&usqp=CAU"},
  { ID: 8, nombre: "Uncharted 4 ", categoria: "aventura", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMibFqSe2w5zMYyL05gEg6Feg24i2YVMc4g&usqp=CAU" },
];

const terror = [
  { ID: 9, nombre: "Alan Wake", categoria: "terror", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pslrnGywNBBc-tmhH-nxM7ACvU5cMnqS9g&usqp=CAU" },
  { ID: 10, nombre: "Alien Isolation", categoria: "terror", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1RGzTp6xeoJfiuLdmf1UWM_rmY57znTySQ&usqp=CAU" },
  { ID: 11, nombre: "Amnesia: A Machine for Pigs", categoria: "terror", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOs-flx_vPhKeJ5q6CjAvQ1HPEQN9lsJia8Q&usqp=CAU" },
  { ID: 12, nombre: "Dead Space", categoria: "terror", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJt0paERSYnYlgbuP0YNkn6lBaSPleK7B_A&usqp=CAU" },
  { ID: 13, nombre: "outlast", categoria: "terror", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmjdNcwltz_7UGASSp67yHkqK2KsRaKR_9Q&usqp=CAU" },
];

const pelea = [
  { ID: 14, nombre: "Mortal Kombat 11", categoria: "pelea", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_CyG8Eq_C6y7qk_bzKPljlxWDwPt1MaKSA&usqp=CAU" },
  { ID: 15, nombre: "WWE 2K22", categoria: "pelea", precio: 1500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFk3ti-m7rQzRAu2GcRFv24IPkjX_CtG45g&usqp=CAU" },
  { ID: 16, nombre: "Super Smash Bros. Ultimate", categoria: "pelea", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8MojQ7gtfpegmEN3AwiWGsBRqx6a6Yj7Og&usqp=CAU" },
  { ID: 17, nombre: "Tekken 7", categoria: "pelea", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQov3Qxi_phy6hbZ_0ytrprgOtMPxYkW87vtQ&usqp=CAU" },
];

const puzzle = [
  { ID: 18, nombre: "Tetris Effect: Connected", categoria: "puzzles", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Vdqh-VDpN8gyRHAjkJmJ8sDTLueTuc020w&usqp=CAU" },
  { ID: 19, nombre: "Gorogoa", categoria: "puzzles", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TCy37vdox2Yt6r9mo1s90W0rULI7rOTntbQQUEpFLsE31av_Pfncku6qNJWev4MlzsA&usqp=CAU" },
  { ID: 20, nombre: "Unpacking", categoria: "puzzles", precio: 1500, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMsxAKEcw0s1tAvNfIrC8vCpdEvDGkEYBEw&usqp=CAU" },
];

let total = 0

let carrito =[]
if (localStorage.getItem("carrito")!=null) {
  carrito=JSON.parse(localStorage.getItem("carrito"))
  
}

swal.fire({
  html:`Por favor acepte nuestros <a href="#">terminos y condiciones</a>`,
  confirmButtonText:`acepto`,
  background:"grey",
  icon:`info`,
  grow:`row`,
  backdrop:true,
  toast:true,
  position:`top-start`,
  allowOutsideClick:false,
  showCancelButton:false,
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

function mostrarJuegos (arr, list) {
  for (const juego of arr) {
      list.innerHTML+=`<li class="col-sm-3 list-group-item">
      <h3> ID: ${juego.ID} <h3>
      <img src=${juego.Image} width="250" height="250">
      <p> ${juego.nombre}</p>
      <p><strong>$ ${juego.precio}</strong></p>
      <button class="btn btn-danger" id="btn${juego.ID}">Comprar</button>
      </li>
      `;
  }
  arr.forEach(juego => {
      document.getElementById(`btn${juego.ID}`).addEventListener("click", function() {
         total=juego.precio+total
          agregarAlCarrito(juego);
       
      })
  });

}


function agregarAlCarrito(juegoCarro) {
  carrito.push(juegoCarro);
  console.log(carrito);
 
  Swal.fire({
    title:juegoCarro.nombre,
    text:`Se añadio al carrito  $${juegoCarro.precio}`,
    icon:"success",
    background:"grey",
    backdrop:false,
    timer:3000,
    timerProgressBar:true,
    toast:true,
    position:"top-end",
    showConfirmButton:false,
    
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
})

  document.getElementById("tablaBody").innerHTML+=`
  <tr>
      <td>${juegoCarro.ID}</td>
      <td>${juegoCarro.nombre}</td>
      <td>$ ${juegoCarro.precio}</td>
      <td>$ ${total}</td>
  </tr>
  `
  localStorage.setItem("carrito", JSON.stringify(carrito))
}







