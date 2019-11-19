$(document).ready(function() {



  /************************************************************************
  TABS
  ************************************************************************/

  //on cache toutes les cards
  $(".category-content").addClass("d-none");

  //event listener
  $(".category-name").on('click', function(event){
    // on cache toutes les tab puis on ajoute la bonne
    console.log(event.target.id);
    $(".category-content").addClass("d-none");
    $('#content-' + event.target.id).removeClass("d-none");
  });

});