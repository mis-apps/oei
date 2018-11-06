const loadMask = function(id) {
	const divLoading = document.createElement('div');
	divLoading.id = 'div-loading';
	divLoading.classList.add('overlay');
	const iconLoading = document.createElement('i');
	iconLoading.classList.add('fa');
	iconLoading.classList.add('fa-refresh');
	iconLoading.classList.add('fa-spin');
	divLoading.appendChild(iconLoading);
	const contenedor = document.getElementById(id);
	contenedor.appendChild(divLoading);
};

const unloadMask = function(id) {
	const divLoading = document.getElementById('div-loading');
	if(divLoading) {
		document.getElementById(id).removeChild(divLoading);
	}
};

const mostrarErrores = function(objetoMensaje) {
	const keys = Object.keys(objetoMensaje);
	keys.forEach(function(key) {
		let contenedor = document.getElementById(key).parentNode.parentNode;
		contenedor.classList.add('has-error');
		let spanMessage = document.createElement('span');
		spanMessage.classList.add('help-block');
		spanMessage.innerHTML = objetoMensaje[key].message;
		contenedor.appendChild(spanMessage);
	});
};

const limpiarErrores = function() {
	document.querySelectorAll('.form-group').forEach(function(element) {
		element.classList.remove('has-error');
		let spanMessage = element.querySelector('span.help-block');
		if(spanMessage) {
			element.removeChild(spanMessage);
		}
	});
};