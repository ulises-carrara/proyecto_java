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




let numCliente = prompt("ingrese la categoria que esta buscando 1_accion 2_aventura 3_terror 4_pelea 5_puzzles s_salir")

while (numCliente != "s") { 
  

    if (numCliente == 1) {

        for (const categoria1 of accion) {
            console.log("estos son los videojuegos: " + categoria1.ID + "_" + categoria1.nombre + "$" + categoria1.precio);
        }

        let seleccion1 = prompt("ingrese el numero del videojuego deseado")

        if (seleccion1 == 1) {
            cantidad++
            total = total + accion[0].precio

            console.log("Grand Theft Auto V se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = accion.slice(0, 1);


        } else if (seleccion1 == 2) {
            cantidad++
            total = total + accion[1].precio

            console.log("God of War se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = accion.slice(1, 2);

        }else if (seleccion1 == 3) {
            cantidad++
            total = total + accion[2].precio

            console.log("Far Cry se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = accion.slice(2, 3);

        }else if (seleccion1 == 4) {
            cantidad++
            total = total + accion[3].precio

            console.log("Resident Evil se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = accion.slice(3, 4);

        }else if (seleccion1 ==5) {
            cantidad++
            total = total + accion[4].precio

            console.log("Spider-Man se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = accion.slice(4, 5);

        }


    }else if (numCliente == 2) {

        for (const categoria2 of aventura) {
            console.log("estos son los videojuegos: " + categoria2.ID + "_" + categoria2.nombre + "$" + categoria2.precio);
        }

        let seleccion2 = prompt("ingrese el numero del videojuego deseado")

        if (seleccion2 == 1) {

            cantidad++
            total = total + aventura[0].precio

            console.log("Evil Dead: The Game se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = aventura.slice(0, 1);
            
        }else if (seleccion2 == 2) {

            cantidad++
            total = total + aventura[1].precio

            console.log("Ghost of Tsushima se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = aventura.slice(1, 2);
            
        }
        
    }else if (numCliente == 3) {

        for (const categoria3 of terror) {
            console.log("estos son los videojuegos: " + categoria3.ID + "_" + categoria3.nombre + "$" + categoria3.precio);
        }

        let seleccion3 = prompt("ingrese el numero del videojuego deseado")


        if (seleccion3 == 1) {
            
            cantidad++
            total = total + terror[0].precio

            console.log("Alan Wake se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(0, 1);
           
        }else if (seleccion3 == 2) {
                        
            cantidad++
            total = total + terror[1].precio

            console.log("Alien Isolation se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(1, 2);
           
        }else if (seleccion3 == 3) {
                                    
            cantidad++
            total = total + terror[2].precio

            console.log("Amnesia: A Machine for Pigs se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(2, 3);
           
        }else if (seleccion3 == 4) {
                                                
            cantidad++
            total = total + terror[3].precio

            console.log("Dead Space se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(3, 4);

        }else if (seleccion3 == 5) {

            cantidad++
            total = total + terror[4].precio

            console.log("outlast se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(4, 5);
              
        }
        
    }else if(numCliente == 4){

        for (const categoria4 of pelea) {
            console.log("estos son los videojuegos: " + categoria4.ID + "_" + categoria4.nombre + "$" + categoria4.precio);
        }

        let seleccion4 = prompt("ingrese el numero del videojuego deseado")

        if (seleccion4 == 1) {
          
            cantidad++
            total = total + pelea[0].precio

            console.log("Mortal Kombat 11 se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(0, 1); 

        }else if (seleccion4 == 2) {
                    
            cantidad++
            total = total + pelea[1].precio

            console.log("WWE 2K22 se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(1, 2); 
  
        }else if (seleccion4 == 3) {
                                
            cantidad++
            total = total + pelea[2].precio

            console.log("Super Smash Bros. Ultimate se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(2, 3); 
  
        }else if (seleccion4 == 4) {
                                            
            cantidad++
            total = total + pelea[3].precio

            console.log("Tekken 7 se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = terror.slice(3, 4); 
  
        }


    }else if (numCliente == 5) {

        for (const categoria5 of puzzle) {
            console.log("estos son los videojuegos: " + categoria5.ID + "_" + categoria5.nombre + "$" + categoria5.precio);
        }
        let seleccion5 = prompt("ingrese el numero del videojuego deseado")

        if (seleccion5 == 1) {
                      
            cantidad++
            total = total + puzzle[0].precio

            console.log("Tetris Effect: Connected se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = puzzle.slice(0, 1); 
            
        }else if (seleccion5 == 2) {
                      
            cantidad++
            total = total + puzzle[1].precio

            console.log("Gorogoa se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = puzzle.slice(1, 2); 
            
        }else if (seleccion5 == 3) {
                                  
            cantidad++
            total = total + puzzle[2].precio

            console.log("Unpacking se añadio al carrito: " + cantidad + " total apagar: $" + total);
            const carrito = puzzle.slice(2, 3); 
          
        }
        
    }
    prompt("ingrese la categoria que esta buscando 1_accion 2_aventura 3_terror 4_pelea 5_puzzles s_salir")
}
