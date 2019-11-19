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
  var loginbtn = document.getElementById("login");
  var signupbtn = document.getElementById("signup");
  var span = document.getElementById("close-modal");

  // When the user clicks the button, open the modal 
  loginbtn.onclick = function() {
    modal.style.display = "block";
    $("#login-content").removeClass("d-none");
    $("#signup-content").addClass("d-none");
  }
  signupbtn.onclick = function() {
    modal.style.display = "block";
    $("#signup-content").removeClass("d-none");
    $("#login-content").addClass("d-none");
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
  /************************************************************************
  MODAL TABS
  ************************************************************************/ 
  $('.login-tab').on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $("#login-content").removeClass("d-none");
    $("#signup-content").addClass("d-none");
  });
  $('.signup-tab').on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $("#signup-content").removeClass("d-none");
    $("#login-content").addClass("d-none");
  });


});