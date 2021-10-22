//Boton de menu
(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();

const btnToggle = document.querySelector('.menu-wrapper');
btnToggle.addEventListener('click', function (){
    document.getElementById('herramientas').classList.toggle('active');
});

//Fecha Actual
var fecha = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("fecha").innerHTML = fecha.toLocaleDateString("es-ES", options);
	

