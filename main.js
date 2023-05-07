function showDropdown() {
    document.getElementById("dropdown-options").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  
  function   SecondFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtl')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('');
        }
      }
    }
  }

  // Get the button and dropdown content elements
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Add a click event listener to the button
dropdownBtn.addEventListener('click', function() {
  // Toggle the "show" class on the dropdown content element
  dropdownContent.classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    dropdownContent.classList.remove('show');
  }
});
function showInputs(theme) {
  // Hide all input fields
  var inputs = document.getElementsByClassName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("visible");
  }

  // Show input fields for selected theme
  var themeInputs = document.getElementById(theme + "-inputs");
  if (themeInputs) {
    themeInputs.classList.add("visible");
  }
}
