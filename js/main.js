$(document).ready(function () {

    /*function changeTotal(points) {
        total = total + points;
        //return total;
    }*/

    var total = 0;

    /*$('.add1').click(function () {
        //var newTotal changeTotal(1);
        changeTotal(1);
        //$('.score').text(newTotal);
        $('.score').text(total);
    });*/

    $('.add1').click(function () {
        total = total + 1;
        $('.score').text(total);
    });

    $('.add2').click(function () {
        total = total + 2;
        $('.score').text(total);
    });

    $('.add3').click(function () {
        total = total + 3;
        $('.score').text(total);
    });

    $('.sub1').click(function () {
        total = total - 1;
        $('.score').text(total);
    });

    $('.reset').click(function () {
        total = 0;
        $('.score').text(total);
    });

    $('.compare').click(function () {
        //alert('hello');

        var comparison;
        var a = $('#value1').val(); // .val() gets value entered 
        var b = $('#value2').val(); // .val() gets value entered 

        if (a < b) {
            comparison = '<';
        } else if (a > b) {
            comparison = '>';
        } else if (a == b) {
            comparison = '==';
        } else {
            comparison = 'N/A';
        }

        $('#comparison').text(comparison);
    });

    var lights = 'on';

    $('.light-switch').click(function () {
        if (lights == 'on') {
            $('#light-switch').addClass('dark');
            lights = 'off';
        } else {
            $('#light-switch').removeClass('dark');
            lights = 'on';
        }
    });

    $('header ul li a').hover(function () {
        $('.mega-menu').slideDown();
    }, function () {
        $('.mega-menu').slideUp();
    });

    $('button .fadeIn').click(function () {
        $(this).next().fadeToggle();
    });

});
