const accion = [
    { ID: 1, nombre: "Grand Theft Auto V", categoria: "accion", precio: 1500 },
    { ID: 2, nombre: "God of War", categoria: "accion", precio: 1500 },
    { ID: 3, nombre: "Far Cry", categoria: "accion", precio: 1500 },
    { ID: 4, nombre: "Resident Evil", categoria: "accion", precio: 1500 },
    { ID: 5, nombre: "Spider-Man", categoria: "accion", precio: 1500 },
];

const aventura = [
    { ID: 1, nombre: "Evil Dead: The Game", categoria: "aventura", precio: 1500 },
    { ID: 2, nombre: "Ghost of Tsushima", categoria: "aventura", precio: 1500 },
    { ID: 3, nombre: "Ghost of Tsushima", categoria: "aventura", precio: 1500 },
];

const terror = [
    { ID: 1, nombre: "Alan Wake", categoria: "terror", precio: 1500 },
    { ID: 2, nombre: "Alien Isolation", categoria: "terror", precio: 1500 },
    { ID: 3, nombre: "Amnesia: A Machine for Pigs", categoria: "terror", precio: 1500 },
    { ID: 4, nombre: "Dead Space", categoria: "terror", precio: 1500 },
    { ID: 5, nombre: "outlast", categoria: "terror", precio: 1500 },
];

const pelea = [
    { ID: 1, nombre: "Mortal Kombat 11", categoria: "pelea", precio: 1500 },
    { ID: 2, nombre: "WWE 2K22", categoria: "pelea", precio: 1500 },
    { ID: 3, nombre: "Super Smash Bros. Ultimate", categoria: "pelea", precio: 1500 },
    { ID: 4, nombre: "Tekken 7", categoria: "pelea", precio: 1500 },
];

const puzzle = [
    { ID: 1, nombre: "Tetris Effect: Connected", categoria: "puzzles", precio: 1500 },
    { ID: 2, nombre: "Gorogoa", categoria: "puzzles", precio: 1500 },
    { ID: 3, nombre: "Unpacking", categoria: "puzzles", precio: 1500 },
];

let total = 0
let cantidad = 0
const carrito =[]

 function mostrar(arr) {
     for (const el of arr) {
        console.log("estos son los videojuegos: " + el.ID + "_" + el.nombre + " $ " + el.precio);
     }
 }
 function cantDevideojueg() {
     cantidad++
     
 }
 function totalPagar(arr, n) {
    total = total + arr[n].precio
 }
 function carro(arr, n1, n2) {
    const carrito = arr.slice(n1, n2)
    console.log(carrito);
 }


let numCliente = prompt("ingrese la categoria que esta buscando 1_accion 2_aventura 3_terror 4_pelea 5_puzzles s_salir")

while (numCliente!="s") {
    

  switch (numCliente) {
      case "1":
          mostrar(accion)

          let seleccion=prompt("ingrese el numero del video juego deseado")
          
          if (seleccion==1) {

            cantDevideojueg()

            totalPagar(accion,0)

            console.log("Grand Theft Auto V se añadio al carrito: " + cantidad + " total apagar: $" + total);
              
            carro(accion, 0, 1)

          }else if (seleccion==2){
            cantDevideojueg()

            totalPagar(accion,1)

            console.log("God of War se añadio al carrito: " + cantidad + " total apagar: $" + total);

            carro(accion, 1, 2)

          }else if (seleccion==3){
            cantDevideojueg()

            totalPagar(accion,2)

            console.log("Far Cry se añadio al carrito: " + cantidad + " total apagar: $" + total);

            carro(accion, 2, 3)
  
          }else if (seleccion==4) {
            cantDevideojueg()

            totalPagar(accion,3)

            console.log("Resident Evil se añadio al carrito: " + cantidad + " total apagar: $" + total);

            carro(accion, 3, 4)
  
          }else if (seleccion==5) {
            cantDevideojueg()

            totalPagar(accion,4)

            console.log("Spider-Man se añadio al carrito: " + cantidad + " total apagar: $" + total);

            carro(accion, 4, 5)
  
          }
          

          break;

        case"2":
        mostrar(aventura)

        let seleccion1=prompt("ingrese el numero del video juego deseado")

        if (seleccion1==1) {

          cantDevideojueg()

          totalPagar(aventura,0)

          console.log("Evil Dead: The Game se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(aventura, 0, 1)

        }else if (seleccion1==2) {
          
          cantDevideojueg()

          totalPagar(aventura,1)

          console.log("Ghost of Tsushima se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(aventura, 1, 2)

        }

          break;
        case"3":

        mostrar(terror)

        let seleccion2=prompt("ingrese el numero del video juego deseado")

        if (seleccion2==1) {

          cantDevideojueg()

          totalPagar(terror,0)

          console.log("Alan Wake se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(terror, 0, 1)

        }else if (seleccion2==2) {

          cantDevideojueg()

          totalPagar(terror,1)

          console.log("Alien Isolation se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(terror, 1, 2)

        }else if (seleccion2==3) {

          cantDevideojueg()

          totalPagar(terror,2)

          console.log("Amnesia: A Machine for Pigs se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(terror, 2, 3)

        }else if (seleccion2==4) {

          cantDevideojueg()

          totalPagar(terror,3)

          console.log("Dead Space se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(terror, 3, 4)

        }else if (seleccion2==5) {

          cantDevideojueg()

          totalPagar(terror,4)

          console.log("outlast se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(terror, 4, 5)

        }


          break;
       case"4":

       mostrar(pelea)

       let seleccion3=prompt("ingrese el numero del video juego deseado")

       if (seleccion3==1) {

        cantDevideojueg()

        totalPagar(pelea,0)

        console.log("Mortal Kombat 11 se añadio al carrito: " + cantidad + " total apagar: $" + total);
          
        carro(pelea, 0, 1)

      }else if (seleccion3==2) {

        cantDevideojueg()

        totalPagar(pelea,1)

        console.log("WWE 2K22 se añadio al carrito: " + cantidad + " total apagar: $" + total);
          
        carro(pelea, 1, 2)

      }else if (seleccion3==3) {

        cantDevideojueg()

        totalPagar(pelea,2)

        console.log("Super Smash Bros. Ultimate se añadio al carrito: " + cantidad + " total apagar: $" + total);
          
        carro(pelea, 2, 3)

      }else if (seleccion3==4) {

        cantDevideojueg()

        totalPagar(pelea,3)

        console.log("Tekken 7 se añadio al carrito: " + cantidad + " total apagar: $" + total);
          
        carro(pelea, 3, 4)

      }
          break;
        case"5":

        mostrar(puzzle)

        let seleccion4=prompt("ingrese el numero del video juego deseado")
 
        if (seleccion4==1) {

          cantDevideojueg()
  
          totalPagar(puzzle,0)
  
          console.log("Tetris Effect: Connected se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(puzzle, 0, 1)
  
        }else if (seleccion4==2) {

          cantDevideojueg()
  
          totalPagar(puzzle,1)
  
          console.log("Gorogoa se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(puzzle, 1, 2)
  
        }else if (seleccion4==3) {

          cantDevideojueg()
  
          totalPagar(puzzle,2)
  
          console.log("Unpacking se añadio al carrito: " + cantidad + " total apagar: $" + total);
            
          carro(puzzle, 2, 3)
  
        }


          break;
      default:
          break;
        
  }    prompt ("ingrese la categoria que esta buscando 1_accion 2_aventura 3_terror 4_pelea 5_puzzles s_salir")
}






let encabezado = document.getElementById("principal");
encabezado.style.background="green";

let btnCarro =document.getElementById("btnCarrito");
let btnDark = document.getElementById("btnDark")
let body = document.getElementById("body")

btnDark.addEventListener("click", activarDark)
function activarDark(){
  body.style.background="black";
  btnDark.innerText="Light mode"
}

let seccionCarro=document.getElementById("seccionCarrito")
btnCarro.addEventListener("click", mostrarCarrito)

  let tabla=document.createElement("tablel")
  tabla.className="table table-striped";
  let tBody=document.createElement("tbody")

function mostrarCarrito() { 

  for (const juego of carrito) {
    let fila=document.createElement("tr")
    fila.innerHTML=`
      <td>${juego.ID}</td>
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td> `
    tBody.append(fila)
  }
}
tabla.append(tBody);

seccionCarro.append(tabla);

let seccionjuego=document.getElementById("seccionJuegos")


let btnAccion =document.getElementById("accion")
btnAccion.addEventListener("click", mostrarAccion)


let tbAccion =document.createElement("tablel")
tbAccion.className="table table-striped";
let accionBody =document.createElement("tbody")

function mostrarAccion() {

  for (const juego of accion) {
    let fila=document.createElement("tr")
    fila.innerHTML=`
      <td>${juego.ID}</td>
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td> `
      accionBody.append(fila)
  }
  
}tbAccion.append(accionBody)

seccionjuego.append(tbAccion)


let btnAventura =document.getElementById("aventura")
btnAventura.addEventListener("click", mostrarAventura)

let tbAventura = document.createElement("table")
let aventuraBody = document.createElement("tbody")
tbAventura.className="table table-striped";

function mostrarAventura() {

  for (const juego of aventura) {
    let fila=document.createElement("tr")
    fila.innerHTML=`
      <td>${juego.ID}</td>
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td> `
      aventuraBody.append(fila)
  }
  
}tbAventura.append(aventuraBody)

seccionjuego.append(tbAventura)



let btnTerror =document.getElementById("terror")
btnTerror.addEventListener("click", mostrarTerro)

let tbTerror = document.createElement("table")
let terrorBody = document.createElement("tbody")
tbTerror.className="table table-striped";

function mostrarTerro() {

  for (const juego of terror) {
    let fila=document.createElement("tr")
    fila.innerHTML=`
      <td>${juego.ID}</td>
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td> `
      terrorBody.append(fila)
  }//420:D
  
}tbTerror.append(terrorBody)

seccionjuego.append(tbTerror)

let btnpelea =document.getElementById("pelea")
btnpelea.addEventListener("click", mostrarPelea)

let tbPelea = document.createElement("table")
let peleaBody = document.createElement("tbody")
tbPelea.className="table table-striped";

function mostrarPelea() {

  for (const juego of pelea) {
    let fila=document.createElement("tr")
    fila.innerHTML=`
      <td>${juego.ID}</td>
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td> `
      peleaBody.append(fila)
  }
} tbPelea.append(peleaBody)

seccionjuego.append(tbPelea)
  
let btnpuzzle =document.getElementById("puzzle")
btnpuzzle.addEventListener("click", mostrarPuzzle)

let tbPuzzle = document.createElement("table")
let puzzleBody = document.createElement("tbody")
tbPuzzle.className="table table-striped";

function mostrarPuzzle() {

  for (const juego of puzzle) {

    let fila=document.createElement("tr")
    fila.innerHTML=`
      <td>${juego.ID}</td>
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td> `
      puzzleBody.append(fila)
  }
}tbPuzzle.append(puzzleBody)

seccionjuego.append(tbPuzzle)



