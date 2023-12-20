const audio = new Audio();
audio.src = "fbi.mp3";

var buttons = document.getElementsByClassName('spend-btn');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var totalAmountElement = document.getElementById('total-amount');
        var totalAmount = parseInt(totalAmountElement.textContent);
        var amountToSpend = parseInt(this.textContent.split('$')[1]);

        if (totalAmount >= amountToSpend) {
            totalAmount -= amountToSpend;
            totalAmountElement.textContent = totalAmount;
        }
        if (totalAmount === 0) {
            window.location.replace("http://127.0.0.1:5501/johnpork.html");
        }
    });
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}