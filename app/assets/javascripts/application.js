// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .
$(document).ready(function() {

  /************************************************************************
  MENU USER
  ************************************************************************/
  $('.dropdown-content').addClass("d-none");
  $('.dropbtn').on('click', function(event){
    $('.dropdown-content').toggleClass("d-none");
  });

  /************************************************************************
  MODAL LOGIN LOGOUT
  ************************************************************************/
  // display the modal
  var modal = document.getElementById("loginModal");
  var btn = document.getElementById("login");
  var span = document.getElementById("close-modal");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // // closing the modal
  // $('#close-modal').onclick = function() {
  //   modal.style.display = "none";
  // }
  // window.onclick = function(event) {
  //   if (event.target == $('#loginModal')) {
  //     $('#loginModal').style.display = "none";
  //   }
  // }


});