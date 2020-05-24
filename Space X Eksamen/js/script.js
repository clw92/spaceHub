/* LAUNCHES PAGE */

const urlLaunches = 'https://api.spacexdata.com/v3/launches/upcoming';

fetch(urlLaunches)
	.then((response) => {
		return response.json();
	})
	.then(getMissionName)
	.then((data) => {
		console.log(data);
	});

function getMissionName(json) {
	const results = json;
	const resultsContainer = document.querySelector('.grid-container');
	let html = '';
	results.forEach(function(result) {
		html += `
            <div class="rockets">
            
            <h3>${result.rocket.rocket_name}</h3>
			<h4><span>Mission name:</span> ${result.mission_name}</h4>
			<h4>Flight number: ${result.flight_number}</h4>
			<h4>Next launch: ${result.launch_date_local}</h4>

			
            </div>`;
	});
	resultsContainer.innerHTML = html;
}

const urlHistory = 'https://api.spacexdata.com/v3/history';

fetch(urlHistory)
	.then((response) => {
		return response.json();
	})
	.then(getHistory)
	.then((data) => {
		console.log(data);
	});

function getHistory(json) {
	const results = json;
	const resultsContainer = document.querySelector('.grid-container-history');
	let html = '';
	results.forEach(function(result) {
		html += `
            <div class="history">
            
			<h3>${result.title}</h3>
			<br>
			<br>
			<br>
	
			<h4>${result.details}</h4>
			
			<br>
			<br><h4>Date:</h4>
			<h4>${result.event_date_utc}
			<br>
			<br>
			<br>
			<br>
			
			
			

			
            </div>`;
	});
	resultsContainer.innerHTML = html;
}

const name = document.querySelector('name');
const email = document.querySelector('email');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	if (name.value === '') {
		e.preventDefault();
	}
});
