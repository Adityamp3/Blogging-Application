document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  });
});
