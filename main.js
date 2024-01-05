// content loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded");
  
    let selectedJuices = [];
    const juicePrices = {
      apple: 3.99,
      mango: 3.49,
      orange: 3.75,
    };
  
    // Price Calculation
    function calculateTotalAmount() {
      if (selectedJuices.length === 1) {
        const juiceName = selectedJuices[0];
        const price = juicePrices[juiceName];
        alert(
          `Your order of ${juiceName} juice has been placed successfully. Pay $${price.toFixed(
            2
          )}.`
        );
      } else if (selectedJuices.length === 2) {
        const totalPrice = selectedJuices.reduce(
          (total, juice) => total + juicePrices[juice],
          0
        );
        alert(
          `Your order for of ${selectedJuices.join(
            " and "
          )} juices has been placed successfully. Pay $${totalPrice.toFixed(2)}.`
        );
      } else if (selectedJuices.length === 3) {
        const totalPrice =
          Object.values(juicePrices).reduce((total, price) => total + price, 0) /
          3;
        alert(
          `Your order for blended juice has been places successfully. Pay $${totalPrice.toFixed(
            2
          )}.`
        );
      }
    }
  
    //   Button functionality
    const addButtons = document.getElementsByClassName("add");
    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener("click", function () {
        const fruitName = this.parentElement.classList[0];
  
        if (selectedJuices.includes(fruitName)) {
          selectedJuices = selectedJuices.filter((juice) => juice !== fruitName);
          this.innerHTML = "Add";
          this.style.backgroundColor = "orangered";
        } else {
          selectedJuices.push(fruitName);
          this.innerHTML = "Added";
          this.style.backgroundColor = "white";
        }
      });
    }
  
    const placeOrderButton = document.querySelector(".placeorder");
    placeOrderButton.addEventListener("click", function () {
      calculateTotalAmount();
    });
  });
  