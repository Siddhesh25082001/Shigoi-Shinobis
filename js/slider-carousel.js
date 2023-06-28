// Creating a Carousel
var $carousel = $('.main-carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
    prevNextButtons: true,
    pageDots: true,
});

// Getting the images
var $imgs = $carousel.find('.cell .clanInfo .right img');

// Get Transform Property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';

// Get Flickity Instance
var flkty = $carousel.data('flickity');

// Adding Images to the Carousel
$carousel.on('scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
        var img = $imgs[i];
        var x = ( slide.target + flkty.x ) * 1/3;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
});