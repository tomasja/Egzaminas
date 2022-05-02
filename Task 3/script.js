/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', () => {
	document.getElementById('message').style.display = 'none';
	fetchGithubUsers();
});

const displayUsers = (users) => {
	users.forEach((user) => {
		const avatar = document.createElement('img');
		avatar.src = user.avatar_url;
		avatar.alt = `${user.login} avatar`;

		const loginName = document.createElement('h3');
		loginName.innerText = user.login;

		const card = document.createElement('div');
		card.classList.add('card');
		card.append(avatar, loginName);
		document.getElementById('output').append(card);
	});
};

async function fetchGithubUsers() {
	try {
		let res = await fetch(ENDPOINT);
		if (res.ok) {
			const users = await res.json();
			console.log(users);
			displayUsers(users);
		}
	} catch (error) {
		console.log(error);
	}
}
