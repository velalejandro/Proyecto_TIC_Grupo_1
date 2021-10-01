const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

btnToggle.addEventListener('click', function () {
    document.getElementById('navbarr').classList.toggle('active');
});

$(document).ready(function(){
    $("#example").dataTable({
        // 1 - inicializacion
         select:true,  
         dom: 'Bfrtip',

  });
})