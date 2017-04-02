$(document).ready(function () {

    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0,
    });
});

$('.type-it').typeIt({
    strings: ['Please hire me!']
});

$('#me').mouseover(function () {
    this.src = 'img/bw.jpg';
}).mouseout(function () {
    this.src = 'img/me.jpg';
});
