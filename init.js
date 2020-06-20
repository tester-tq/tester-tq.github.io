$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('select').formSelect();
});

function toggleModal() {       // Modal screen activation when click on events
  var instance = M.Modal.getInstance($('#modal2'));
  instance.open();
}