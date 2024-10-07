// Function to handle quantity updates
function updateQuantity(quantityElement, change) {
  let currentQuantity = parseInt(quantityElement.textContent);
  currentQuantity += change;

  // Ensure quantity is not less than 0
  if (currentQuantity < 0) {
    currentQuantity = 0;
  }

  // Update the quantity display
  quantityElement.textContent = currentQuantity;
}

// Handle cart operations for each row
document.querySelectorAll('tr[id^="cart-line-"]').forEach(function(cartLine) {
  const quantityElement = cartLine.querySelector('[id^="quantity-number-"]');
  const minusButton = cartLine.querySelector('[id^="quantity-minus-"]');
  const plusButton = cartLine.querySelector('[id^="quantity-plus-"]');
  const deleteButton = cartLine.querySelector('[id^="quantity-delete-"]');
  
  // Handle minus button click
  minusButton.addEventListener('click', function() {
    updateQuantity(quantityElement, -1);
  });

  // Handle plus button click
  plusButton.addEventListener('click', function() {
    updateQuantity(quantityElement, 1);
  });

  // Handle delete button click
  deleteButton.addEventListener('click', function() {
    const CartDeleteDialog = document.getElementById('cart-delete-dialog');
    CartDeleteDialog.style.display = 'block';
    
    // Confirm delete action
    const confirmDeleteButton = document.getElementById('confirm-delete');
    confirmDeleteButton.addEventListener('click', function() {
      cartLine.remove();
      CartDeleteDialog.style.display = 'none';
    });
    
    // Cancel delete action
    const cancelDeleteButton = document.getElementById('cancel-delete');
    cancelDeleteButton.addEventListener('click', function() {
      CartDeleteDialog.style.display = 'none';
    });
    
    // Close dialog if user clicks outside of it
    window.addEventListener('click', function(event) {
      if (event.target === CartDeleteDialog) {
        CartDeleteDialog.style.display = 'none';
      }
    });
  });
});
