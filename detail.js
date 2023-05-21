document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const quantityInput = document.querySelector('.quantity-input');

    const bigImg = document.querySelector(".main-thumb img")
    const smallImg = document.querySelectorAll(".mini-thumb img")
    smallImg.forEach(function(imgItem){
    imgItem.addEventListener("click", function () {
        bigImg.src = imgItem.src
    })
})
  
    decreaseBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });
  
    increaseBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;
    });
  });