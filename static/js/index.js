let ctx = document.getElementById("requestsChart").getContext('2d');
let requestsChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: '',
			fill: false,
			backgroundColor: "rgb(99, 255, 125)",
			borderColor: "rgb(99, 255, 125)",
			data: []
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			fontSize: 15,
			fontColor: '#E1E1E1',
			text:  window.location.href
		},
		legend: {
			display: false
		},
		tooltip: {
			enabled: true,

		},
		scales: {
			xAxes: [{
				gridLines: {
					display: false
				},
			}],
			yAxes: [{
				gridLines: {
					display: true
				},
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});

for(let i = 1; i <= 60; i++) {
	requestsChart.data.labels.push("");
	requestsChart.data.datasets[0].data.push(0);
}
requestsChart.update();



var socket = io();
socket.on('rps', (count) => {
	if(requestsChart.data.datasets[0].data.length >= 60) {
		requestsChart.data.datasets[0].data.splice(0, 1);
	}

	requestsChart.data.datasets[0].data.push(count);
	requestsChart.update();
});