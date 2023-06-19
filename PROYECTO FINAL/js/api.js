
const apiUrl = 'https://pokeapi.co/api/v2';

// Obtener los primeros 151 Pokémon (generación 1)
async function obtenerPokemonOriginales() {
  try {
    const response = await fetch(`${apiUrl}/pokemon?limit=151`);
    const data = await response.json();
    const pokemonList = data.results;

    // Dividir la lista de Pokémon en grupos de 5
    const gruposDePokemon = dividirEnGrupos(pokemonList, 5);

    // Mostrar los Pokémon originales en el HTML
    const pokemonContainer = document.getElementById('cuerpo2');
    gruposDePokemon.forEach(async (grupo) => {
      const pokemonPromises = grupo.map((pokemon) => obtenerPokemonDetalles(pokemon.url));
      const pokemonsData = await Promise.all(pokemonPromises);
      const grupoHTML = crearGrupoHTML(pokemonsData);
      pokemonContainer.innerHTML += grupoHTML;
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

// Dividir un array en grupos de un tamaño específico
function dividirEnGrupos(array, tamañoGrupo) {
  const grupos = [];
  for (let i = 0; i < array.length; i += tamañoGrupo) {
    grupos.push(array.slice(i, i + tamañoGrupo));
  }
  return grupos;
}

// Crear el HTML para un grupo de Pokémon
function crearGrupoHTML(pokemonDataArray) {
  let grupoHTML = '<div class="grupo">';
  pokemonDataArray.forEach((pokemonData) => {
    const habilidades = pokemonData.abilities.map((ability) => ability.ability.name);
    const tipos = pokemonData.types.map((type) => type.type.name);
    grupoHTML += `
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
  `;
  });
  grupoHTML += '</div>';
  return grupoHTML;
}

// Llamar a la función para obtener los Pokémon originales
obtenerPokemonOriginales();