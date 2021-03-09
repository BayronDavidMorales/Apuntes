$(document).ready(function () {
    $('.container').css({ 'border': '1px solid gray', margin: '1em', paddingLeft: '1em'});
    $('#prueba').css({ 'border': '1px solid black', margin: '1em', paddingLeft: '40%'});
    $('.code').css({ 'font-family': 'Source Code Pro', 'padding': '1em', 'margin': '2em', 'background-color': '#000030', 'color': 'white' });
    $('.box').css({ 'font-family': 'Source Code Pro', 'padding': '2em', 'margin': '6em', 'background-color': '#4C4CFD', 'color': 'white' });
    $('.inline').css({ 'border': '1px solid #000000', display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px'});

    $('#seleccionar').html('$("selector").metodo  => selecciona la etiqueta');
    $('#seleccionar-org').html('document.querySelector("selector").metodo  => selecciona la etiqueta');

    $('#modificar').html('$("selector").html(contenido)   => Remplaza el contenido de la etiqueta');
    $('#modificar-org').html('document.querySelector("selector").innerHTML= "Reemplaza el contenido de la etiqueta"');

    $('#DOM-agregarClase').html("$('selector').addClass(className) => agrega una clase");
    $('#DOM-quitarClase').html("$('selector').removeClass(className) => remueve una clase");

    $('#append').html("$(selector).append( 'etiqueta> Ejemplo /etiqueta> ') => agrega un nuevo elemento al final del contenedor");
    $('#prepend').html("$(selector).prepend( 'etiqueta> Ejemplo /etiqueta> ') => agrega un nuevo elemento al principio del contenedor");

    $('#css').html("$(selector).css({propiedad: 'valor', propiedad: 'valor'}) => agrega estilos css");

    $('#remove').html("$(selector).remove('selector') => elimina la etiqueta si no se le indica un selector");
    $('#hide').html("$(selector).hide() => oculta la etiqueta (display: none)");

    $('#atribute').html("$(selector).attr('atributeName', 'value') => añade atributos a la etiqueta ('src', 'direccion')");

    $('#img-metodos').attr('width', '80%')
    // eventos
    // Click()
    $('#eventoClick').html("$(selectorButton).click(function(){code}); => eventos del mouse");

    var text = $('.text');
    $('.btn1').click(function (e) {
        text.css('color', 'red');
    });
    $('.btn2').click(function (e) {
        text.css('color', 'blue');
    });
    $('.btn3').click(function (e) {
        text.css('background', 'red');
    });

    // Keyup()
    $('#eventoKeyup').html("$(selector).ready(function(){input.keyup(function(){code})}); => contenido: input.val()... eventos del teclado");

    
    $('.keyup').ready(function () {
        var inputKeyup = $('.inputKeyup');
        var textKeyup = $('.textKeyup');
        inputKeyup.keyup(function () {
            textKeyup.html(inputKeyup.val());
            
            if (inputKeyup.val() == "") {
                textKeyup.html("loading...");
            }
        })
    });

    // animaciones
    var animation= $('.animation');
    
    $('#hideAnimation').html("$(selector).hide(time)/show(time)/toggle(time); => animacion de ocultar y mostrar");
    $('#fadeInAnimation').html("$(selector).fadeIn(time)/fadeOut(time)/fadeToggle(time)/fadeTo(time); => animacion desvanecer");
    $('#SlidingAnimation').html("$(selector).slideDown(time)/slideUp(time)/slideToggle(time); => animacion deslizar");
    $('#Animation').html("$(selector).animate({params},speed,callback); => animacion personalizada");
    $('#stopAnimation').html("$(selector).stop(); => detiene la animacion");

    
    $('.button1').click(function () {
        animation.hide(800);
    });
    $('.button2').click(function () {
        animation.show(1000);
    });
    $('.button3').click(function () {
        animation.toggle(800);
    });
});