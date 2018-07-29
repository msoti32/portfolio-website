console.log("Hi! Welcome to My Portfolio Site")

$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });
});
