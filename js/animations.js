$('a').removeClass('active');
$(document).ready(function(){
    $("section").mouseenter(function(){
         var id = $(this).attr('id');
         $('a').removeClass('active');
         $("a[href*="+id+"]").addClass('active');
    });
});

$(".navIcon").click(function() {
    $('html,body').animate({
        scrollTop: $("#homeSection").offset().top},
        'slow');
});

$(".aboutMeButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutMeSection").offset().top},
        'slow');
});

$(".profileNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutMeSection").offset().top},
        'slow');
});

$(".portfolioNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolioSection").offset().top},
        'slow');
});

$(".techSkillsNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#techSkillsSection").offset().top},
        'slow');
});

$(".contactNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactSection").offset().top},
        'slow');
});

window.onscroll = closeMenu;

function closeMenu() {
    $('#navbarResponsive').addClass("collapse")
    $('#navbarResponsive').removeClass("show")
}