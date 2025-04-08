const btnGoToDrawing = document.querySelector('.info-order-btn-drawing');
const strDrawing = document.getElementById('drawing');
const strCart = document.getElementById('cart');

function CartbtnVizDrawing() {
  if (btnGoToDrawing) {
    btnGoToDrawing.addEventListener('click', () => {
      console.log('Button clicked!');
      strCart.classList.remove('active');
      strDrawing.classList.add('active');
    });
  } else {
    console.error('Button not found!');
  }
}

export default CartbtnVizDrawing;
