(function() {
	
	const button = document.querySelector('.js-search');
	const input = document.querySelector('.js-gif-input');

	button.addEventListener('click', (e) => {
		const searchTerm = input.value;
		input.value = "";

		if (searchTerm.trim() === "") {
			alert('Please input value!')
			return;
		}
		input.setAttribute= ('disabled','disabled');
		button.setAttribute= ('disabled','disabled');
	});

	
}) ();
