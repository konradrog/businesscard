function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function personalData() {

	info =  'Hi, I am John B-)' + '\n' +
			'James Bond' + '\n' +
			'james@bond.com' + '\n' +
			'my website is secret' + '\n' +
			'Dean s group: 1212' + '\n' +
			'Applied Informatics' + '\n'

	navigator.notification.alert(info);
	
}