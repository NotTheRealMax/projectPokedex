const resultContainer = document.getElementById('result-container');
document.getElementById('searchForm').addEventListener("submit", getPokemon);


function getPokemon(event){
	let searchTerm = event.target.elements.searchTerm.value;
	const request = new XMLHttpRequest();

	request.onload = function () {
		const data = JSON.parse(request.responseText);
		console.log(data);
		resultContainer.innerHTML = `<img src="${data.sprites.front_default}">
		                             <img src="${data.sprites.front_shiny}">
									 <br><b>name:</b> ${data.name},
									 <br> <b>type:</b> ${data.types.map(type => type.type.name).join(", ")},
									 <br><b>number:</b> # ${data.order},
									 <br><b>height:</b> ${data.height},
									 <br><b>weight</b>: ${data.weight},
									 <br> <b>base abilities:</b> ${data.abilities.map(ability => ability.ability.name).join(", ")}
									 <br><b>hp:</b> ${data.stats[0].base_stat},
									 <br><b>attack:</b> ${data.stats[1].base_stat},
									 <br><b>defense:</b> ${data.stats[2].base_stat},
									 <br><b>special-attack:</b> ${data.stats[3].base_stat},
									 <br><b>special-defense:</b>${data.stats[4].base_stat},
									 <br><b>speed:</b> ${data.stats[5].base_stat}`;

	}
	

	request.open("GET", `https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
	request.send()
}