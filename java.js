function obtenerPeliculas () {
  const URLGET = "https://api.themoviedb.org/3/movie/popular?api_key=28ad75bb2cea5a47f67b2b6587c55459&lenguage=es-MX"
  fetch(URLGET)
  .then(resultado => resultado.json())
  .then(data=>{
      let peliculas = data.results
      peliculas.forEach(pelicula=>{
       document.querySelector("#peliculas").innerHTML += `<li class="col-sm-3 list-group-item">
      <h3> ID: ${pelicula.id} <h3>
      <img src=${pelicula.poster_path} width="250" height="250">
      <h1> ${pelicula.title}</h1>
      <h5>Fecha de estreno ${pelicula.release_date}</h5>
      <p> ${pelicula.overview}</p>
      </li>
      `;
          
      })

  })
}


obtenerPeliculas()




function obtenerPeliculas2 () {
  const URLGET = "https://api.themoviedb.org/3/movie/upcoming?api_key=28ad75bb2cea5a47f67b2b6587c55459&lenguage=es-MX"
  fetch(URLGET)
  .then(resultado => resultado.json())
  .then(data=>{
      let peliculas = data.results
      peliculas.forEach(pelicula=>{
       document.querySelector("#peliculas2").innerHTML += `<li class="col-sm-3 list-group-item">
      <h3> ID: ${pelicula.id} <h3>
      <img src=${pelicula.poster_path} width="250" height="250">
      <h1> ${pelicula.title}</h1>
      <h5>Fecha de estreno ${pelicula.release_date}</h5>
      <p> ${pelicula.overview}</p>
      </li>
      `;
          
      })

  })
}

obtenerPeliculas2()
