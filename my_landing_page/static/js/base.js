$(document).on('click', '.nav-link', function() {
    $(".nav-item").find(".active").removeClass("active");
})

$(document).ready(function() {
    $('a[href="' + location.pathname + '"]').closest('.nav-item').addClass('active');
});

console.log('TEST');