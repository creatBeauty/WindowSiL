function greatOrder() {
  const home = document.getElementById('home');
  const calculator = document.getElementById('calculator');

  const btnGreatOrder = document.querySelectorAll('.btn-great-order');
  btnGreatOrder.forEach((button) => {
    button.addEventListener('click', () => {
      home.classList.remove('active');
      calculator.classList.add('active');
    });
  });
}
export default greatOrder;
