let numCliente=prompt("hola bienvenido a Nexus ingrese 1 para ingresar")



if (numCliente==1) {

    let total=0
    let cantidad=0

    let categoria=prompt("ingrese la categoria que esta buscando 1_accion 2_aventura 3_terror 4_pelea 5_puzzles s_salir")//agregar mas categorias 
       
    while (categoria!="s"){

    switch (categoria){

        case "1":
            let gtaPrecio=1000  //precios genericos despues cambiar 
            let gowprecio=1000
            let fcprecio=1000
            let reprecio=1000
            let smprecio=1000

            let accion=prompt("Juegos de accion 1_Grand Theft Auto V: $"+gtaPrecio+" 2_God of War: $"+gowprecio+" 3_Far Cry: $"+fcprecio+" 4_Resident Evil: $"+reprecio+" 5_Spider-Man: $"+smprecio)
            
            if (accion==1) {
                total=total+gtaPrecio
                cantidad++
                prompt("Grand Theft Auto V: $"+gtaPrecio+" se añadio al carrito"+cantidad+" total a pagar "+total) 

            }else if(accion==2){
                total=total+gowprecio
                cantidad++
                prompt("God of War: $"+gowprecio+" se añadio al carrito "+cantidad+" total a pagar "+total) 

            }else if(accion==3){
                total=total+fcprecio
                cantidad++
                prompt("Far Cry: $"+fcprecio+" se añadio al carrito "+cantidad+" total a pagar "+total) 

            }else if(accion==4){
                total=total+reprecio
                cantidad++
                prompt("Resident Evil: $"+reprecio+" se añadio al carrito "+cantidad+" total a pagar "+total) 

            }else if(accion==5){
                total=total+smprecio
                cantidad++
                prompt("Spider-Man: $"+smprecio+" se añadio al carrito "+cantidad+" total a pagar "+total) 
            }

            break;

        case "2":

            let edPrecio=1000
            let gotPrecio=1000
            let lpPrecio=1000

            let aventura=prompt("juegos de aventura 1-Evil Dead: The Game: $"+edPrecio+" 2_Ghost of Tsushima: $ "+gotPrecio+" 3_Leyendas Pokémon: Arceus: $"+lpPrecio)
            
            if (aventura==1) {
                total=total+edPrecio
                cantidad++
                prompt("Evil Dead: The Game: $"+edPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total) 

            }else if(aventura==2){
                total=total+gotPrecio
                cantidad++
                prompt("Ghost of Tsushima: $"+gotPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

            }else if(aventura==3){
                total=total+lpPrecio
                cantidad++
                prompt("Ghost of Tsushima: $"+lpPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

            }

            break; 

        case "3":

            let awPrecio=1000
            let aiPresio=1000
            let amnPrecio=1000
            let dpPrecio=1000
            let outPrecio=1000

            let terror=prompt("Juegos de terror 1_Alan Wake: $"+awPrecio+" 2_Alien Isolation: $"+aiPresio+" 3_Amnesia: A Machine for Pigs: $"+amnPrecio+" 4_Dead Space: $"+dpPrecio+" 5_Outlast: $"+outPrecio)

                if (terror==1) {
                    total=total+awPrecio
                    cantidad++
                    prompt("Alan Wake: $"+awPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

                }else if(terror==2){
                    total=total+aiPresio
                    cantidad++
                    prompt("Alien Isolation: $"+aiPresio+" se añadio al carrito "+cantidad+" total a pagar "+total)

                }else if(terror==3){
                    total=total+amnPrecio
                    cantidad++
                    prompt("Amnesia: A Machine for Pigs: $"+amnPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

                }else if(terror==4){
                    total=total=dpPrecio
                    cantidad++
                    prompt("Dead Space : $"+dpPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

                }else if(terror==5){
                    total=total+outPrecio
                    cantidad++
                    prompt("Outlast: $"+outPrecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

                }

            break;

         case "4":

         let mkprecio=1000
         let wweprecio=1000
         let ssbprecio=1000
         let tkkprecio=1000

            let pelea=prompt("Juegos de pelea 1_Mortal Kombat 11: $"+mkprecio+" 2_WWE 2K22: $"+wweprecio+" 3_Super Smash Bros. Ultimate: $"+ssbprecio+" 4_Tekken 7: $"+tkkprecio)
            
            if (pelea==1) {
                total=total+mkprecio
                cantidad++
                prompt("Mortal Kombat 11: $"+mkprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

            }else if(pelea==2){
                total=total+wweprecio
                cantidad++
                prompt("WWE 2K22: $"+wweprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

            }else if(pelea==3){
                total=total+ssbprecio
                cantidad++
                prompt("Super Smash Bros. Ultimate: $"+ssbprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

            }else if(pelea==4){
                total=total+tkkprecio
                cantidad++
                prompt("Tekken 7: $"+tkkprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)

            }

            break;

        case "5":
            let teprecio=1000
            let gorprecio=1000
            let unprecio=1000

            let puzzles=prompt("Juegos de puzzles 1_Tetris Effect: Connected: $"+teprecio+" 2_Gorogoa: $"+gorprecio+" 3_Unpacking: $"+unprecio)
            if (puzzles==1) {
                total=total+teprecio
                cantidad++
                prompt("Tetris Effect: Connected: $"+teprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)
                
            }else if (puzzles==2){
                total=total+gorprecio
                cantidad++
                prompt("Gorogoa: $"+gorprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)
               
            }else if (puzzles==3){
                total=total+unprecio
                cantidad++
                prompt("Unpacking: $"+unprecio+" se añadio al carrito "+cantidad+" total a pagar "+total)
               
            }
            break;

        default:
            break;
    }
    categoria=prompt("ingrese la categoria que esta buscando 1_accion 2_aventura 3_terror 4_pelea 5_puzzles s_salir")
  }
}

