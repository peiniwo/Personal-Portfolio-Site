'use strict'

window.jQuery = window.$ = require('jquery');
require('lightbox2');
require('bootstrap');
require('bootstrap-validator');
require('./isotope.min');
require('./animated-headline');
require('./contact');
$('#status').fadeOut(); // will first fade out the loading animation
$('#preloader').delay(850).fadeOut('slow'); // will fade out the white DIV that covers the website.
$('body').delay(850).css({
    'overflow': 'visible'
});
$(window).on('load', function() {
    require('./menu');
    require('./custom');
});
