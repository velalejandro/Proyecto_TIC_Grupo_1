(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();

const btnToggle = document.querySelector('.menu-wrapper');
btnToggle.addEventListener('click', function (){
    document.getElementById('herramientas').classList.toggle('active');
});