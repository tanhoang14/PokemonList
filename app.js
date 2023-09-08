const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// Assuming you have an array of Pokémon names
const pokemonNames = ["bulbasaur", "ivysaur", "venusaur", ...]; // Add all Pokémon names here

for (let i = 1; i <= 1020; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const name = document.createElement('span'); // Create a span for the Pokémon name
    
    // If you have a pre-defined list of Pokémon names, use them
    // If using an API, you'd need to fetch the name for each Pokémon using its ID or other identifier.
    const pokemonName = pokemonNames[i - 1]; // Adjust the index as needed

    name.innerText = pokemonName;
    
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    pokemon.appendChild(name); // Append the name element
    container.appendChild(pokemon);
}
