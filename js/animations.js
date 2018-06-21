$(document).ready(function(){

    $("section").mouseenter(function(){
         var id = $(this).attr('id');
         $('a').removeClass('active');
         $("a[href*="+id+"]").addClass('active');
    });
 
 });