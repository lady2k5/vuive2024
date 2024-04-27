document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popup19-container19");
    var closeButton = document.getElementById("close19-btn19");
  
    closeButton.addEventListener("click", function() {
      popupContainer.style.display = "none";
    });
  
    setTimeout(function() {
      popupContainer.style.display = "none";
    }, 6000);
  });
  