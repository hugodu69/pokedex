const pokedex = './pokedex.json';

const pokemons = [];

fetch(pokedex)
	.then(blob => blob.json())
	.then(data => pokemons.push(...data.pokemon));

function trouverPokemon(recherche, pokemons){
	const regex = new RegExp(recherche, 'gi')
	return pokemons.filter(pokemon => {
		return pokemon.name.match(regex)
		/*|| pokemon.type.find(type => type.match(regex));*/
	});
}

function afficherResultat() {
	const tableauResultat = trouverPokemon(this.value, pokemons);
	const html = tableauResultat.map(pokemon => {
		return `
			<li>
			<img src='${pokemon.img}' width="42"/>
			<span>${pokemon.name}</span>
			<span>${pokemon.type}</span>
			</li>
		`;
	}).join('');
	resultat.innerHTML = html;
}

const input = document.querySelector('input');
const resultat = document.querySelector('ul');

input.addEventListener('change', afficherResultat);
input.addEventListener('keyup', afficherResultat);
