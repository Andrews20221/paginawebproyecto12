const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Clic

btnIncrement.addEventListener('clic', () => {
	valor por defecto += 1;
	inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('clic', () => {
	si (valor por defecto === 1) {
		devolver;
	}
	valor por defecto -= 1;
	inputQuantity.value = valueByDefault;
});

// Alternar
// Constantes Alternar títulos
const toggleDescription = document.querySelector(
	'.Descripción del Título'
);
const toggleAdditionalInformation = document.querySelector(
	'.título-información-adicional'
);
const toggleReviews = document.querySelector('.title-reviews');

// Constantes Contenido Texto
const contentDescription = document.querySelector(
	'.texto-descripción'
);
const contentAdditionalInformation = document.querySelector(
	'.text-información-adicional'
);
const contentReviews = document.querySelector('.text-reviews');

// Cambio de funciones
toggleDescription.addEventListener('clic', () => {
	contentDescription.classList.toggle('oculto');
});

toggleAdditionalInformation.addEventListener('clic', () => {
	contentAdditionalInformation.classList.toggle('oculto');
});

toggleReviews.addEventListener('clic', () => {
	contentReviews.classList.toggle('oculto');
});