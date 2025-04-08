const btnGoToDrawing = document.querySelector('.btn-drawing');
const strDrawing = document.getElementById('drawing');
const strCart = document.getElementById('cart');

function btnVizDrawingExit() {
  btnGoToDrawing.addEventListener('click', () => {
    strCart.classList.add('active');
    strDrawing.classList.remove('active');
  });
}

export default btnVizDrawingExit;
