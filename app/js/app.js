$(document).ready(function (){
    $('.burger').click(function(event){
        $('.burger, .burger_menu').toggleClass('active');
    });
});

let b = [...document.querySelectorAll('.pointer_border')];
let s = [...document.querySelectorAll('.slider')];
for ( let i = 0; i < b.length; i++) {
    b[i].click(function () {
        s[i].toggleClass('hover');
    })
/*    $(document).click( function(e){
        if ( $(e.target).closest(b[i]).length ) {
            // клик внутри элемента
            return;
        }
        // клик снаружи элемента
    });*/
}

$(document).ready(function(){
    $.getJSON("data.json", function (data){
        var data_v = '';
        $.each(data, function (key, value){
            data_v += '<div class="carousel-item">';
            data_v += '<div class="clients_block">';
            data_v += '<div class="clients_img" style="background-image: url('+value.img+')"></div>';
            data_v += '<div class="clients_report">';
            data_v += '<p>'+value.text+'</p>';
            data_v += '<div class="client_data">';
            data_v += '<h4>'+value.name+'</h4>';
            data_v += '<h5>'+value.location+'</h5>';
            data_v += '</div>';
            data_v += '</div>';
            data_v += '</div>';
            data_v += '</div>';

        });
        $('#inner').append(data_v);

        var indicate = '';
        $.each(data, function (key, value){
            indicate += '<li data-bs-target="#carouselWithIndicators" data-bs-slide-to="'+value.id+'">';
            indicate += '<div class="pointer_border">';
            indicate += '<div class="pointer"></div>';
            indicate += '</div>';
            indicate += '</li>';
        });
        $('#indikator').append(indicate);
    });
});