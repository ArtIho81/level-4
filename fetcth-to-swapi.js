async function getFilm(id) {
    const filmsUrl = 'https://swapi.dev/api/films/'
    const film5 = await fetch(filmsUrl+id)
    const response = await film5.json()
    console.log(`${id} characters = ${response.characters.length}
    planets = ${response.planets.length}
    species = ${response.species.length}
    starships = ${response.starships.length}
    vehicles = ${response.vehicles.length}`) 
}
getFilm(5)
getFilm(6)