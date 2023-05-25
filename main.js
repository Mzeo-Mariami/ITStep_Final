var suggestions = [
  { label: 'laptop', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/laptop.html' },
  { label: 'keyboard', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/keyboard.html' },
  { label: 'shoes', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/shoes.html' },
  { label: 'phone', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/phone.html' },
  { label: 'joystick', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/joystick.html' },
  { label: 'other kind of laptop', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/laptop2.html' },
  { label: 'tablet', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/tablet.html' },
  { label: 'jewel', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/accessorie.html' },
  { label: 'backpack', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/backpack.html' },
  { label: 'ball', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/ball.html' },
  { label: 'chair', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/chair.html' },
  { label: 'chair2', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/chair2.html' },
  { label: 'hat', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/hat.html' },
  { label: 'heels', link: 'file:///C:/Users/User/OneDrive/სამუშაო%20დაფა/ITStep_Final/ITStep_Final/heels.html' },
  
  // Add more suggestions as needed
];

function showSuggestions(event) {
  var input = event.target;
  var value = input.value.toLowerCase();
  var dropdown = document.getElementById('autocompleteDropdown');
  dropdown.innerHTML = '';

  if (!value) {
    return;
  }

  var filteredSuggestions = suggestions.filter(function(suggestion) {
    return suggestion.label.toLowerCase().startsWith(value);
  });

  filteredSuggestions.forEach(function(suggestion) {
    var item = document.createElement('div');
    item.classList.add('autocomplete-item');
    item.textContent = suggestion.label;
    item.addEventListener('click', function() {
      window.location.href = suggestion.link;
    });
    dropdown.appendChild(item);
  });
}


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

var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
  // Get references to the search bar and suggestions container
const searchBar = document.getElementById('search-bar');
const suggestionsContainer = document.getElementById('suggestions-container');

// Add input event listener to the search bar
searchBar.addEventListener('input', handleInput);

// Handle input event
function handleInput() {
  const userInput = searchBar.value;
  
  // Clear previous suggestions
  suggestionsContainer.innerHTML = '';
  
  // Fetch or generate suggestions based on user input
  const suggestions = getSuggestions(userInput);
  
  // Display the suggestions
  suggestions.forEach((suggestion) => {
    const suggestionElement = document.createElement('div');
    suggestionElement.textContent = suggestion;
    
    // Add click event listener to each suggestion
    suggestionElement.addEventListener('click', () => {
      // Redirect or perform an action based on the clicked suggestion
      // Example: Redirect to a product detail page
      window.location.href = '/product-detail?name=' + encodeURIComponent(suggestion);
    });
    
    suggestionsContainer.appendChild(suggestionElement);
  });
}

// Function to fetch or generate suggestions based on user input
function getSuggestions(input) {
  // Implement your logic to fetch or generate suggestions based on the input
  // This can involve an API request, searching a database, or using a predefined list
  // For simplicity, let's use the provided product names as suggestions
  const productNames = [
    'Neve Strix Pro L123 (2021) - TP399K 1TB',
    'Dark King M346 Mechanical Keyboard - Free 31 Keys',
    'Reader Touring Coboy Brc Black Leather Boots',
    'Meta Galaxy X oliw10 5G sintra 256 GB'
  ];
  
  // Filter the product names based on the input
  const filteredSuggestions = productNames.filter((name) =>
    name.toLowerCase().startsWith(input.toLowerCase())
  );
  
  return filteredSuggestions;
}