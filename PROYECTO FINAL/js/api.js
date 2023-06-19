
const apiUrl = 'https://pokeapi.co/api/v2';

// Obtener todos los Pokémon originales (generación 1)
async function obtenerPokemonOriginales() {
  try {
    const response = await fetch(`${apiUrl}/pokemon?limit=151`);
    const data = await response.json();
    const pokemonList = data.results;

    const pokemonContainer = document.getElementById('cuerpo2');
    pokemonContainer.innerHTML = ''; // Limpiar el contenido previo

    pokemonList.forEach(async (pokemon) => {
      const pokemonData = await obtenerPokemonDetalles(pokemon.url);
      const habilidades = pokemonData.abilities.map((ability) => ability.ability.name);
      const tipos = pokemonData.types.map((type) => type.type.name);

      const pokemonHTML = `
      <div class="row">
        <div class="pokemon card">
          <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="card-img-top">
          <div class="card-body">
            <h3 class="card-text">${pokemonData.name}</h3>
            <p class="card-text">ID: ${pokemonData.id}</p>
            <p class="card-text">Altura: ${pokemonData.height}</p>
            <p class="card-text">Peso: ${pokemonData.weight}</p>
            <p>Tipo: ${tipos.join(', ')}</p>
            <p class="card-text">Habilidades: ${habilidades.join(', ')}</p>
          </div>
        </div>
        </div>
      `;

      pokemonContainer.innerHTML += pokemonHTML;
    });
  } catch (error) {
    console.log('Error al obtener los Pokémon originales:', error);
  }
}

// Obtener detalles de un Pokémon
async function obtenerPokemonDetalles(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los detalles del Pokémon:', error);
  }
}

// Llamar a la función para obtener los Pokémon originales
obtenerPokemonOriginales();