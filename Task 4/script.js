/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const promise = fetch(ENDPOINT);
promise
	.then((resp) => resp.json())
	.then((data) => {
		data.forEach((cars) => {
			const card = document.createElement('div');
			card.classList.add('card');
			const carBrand = document.createElement('h2');
			carBrand.textContent = cars.brand;
			const carModel = document.createElement('p');
			carModel.textContent = cars.models;
			card.append(carBrand, carModel);
			output.append(card);
		});

		console.log(data);
		// });
	});
