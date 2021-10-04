const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

btnToggle.addEventListener('click', function () {
    document.getElementById('navbarr').classList.toggle('active');
});

btnToggle.addEventListener('click', function () {
    document.getElementById('TableBoostrap').classList.toggle('active');
});

function MostarVentas(){
    document.getElementById("TableBoostrap").style.display = "block";
}

function Home(){
    document.getElementById("TableBoostrap").style.display = "none";
}

$(document).ready(function(){
    $("#example").dataTable({
        // 1 - inicializacion
         select:true,  
         dom: 'Bfrtip',

  });
})