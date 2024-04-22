function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
  
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  var colorDisplay = document.getElementById("colorDisplay");
  var colorButton = document.getElementById("colorButton");
  var effectBoxes = document.getElementsByClassName("effectBox");
  
  function updateColor() {
    var randomColor = generateRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
    colorButton.style.backgroundColor = randomColor;
  
    for (var i = 0; i < effectBoxes.length; i++) {
      effectBoxes[i].style.backgroundColor = randomColor;
    }
  }
  
  colorButton.addEventListener("click", updateColor);
  
  // Generate a random color when the page loads
  updateColor();