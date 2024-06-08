window.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById("toggle");

  toggle.addEventListener("click", function (event) {
    const body = document.getElementsByTagName("body")[0];
    
    if (body.className == "dark") {
      body.className = ""
    } else {
      body.className = "dark"
    }
  });
});

