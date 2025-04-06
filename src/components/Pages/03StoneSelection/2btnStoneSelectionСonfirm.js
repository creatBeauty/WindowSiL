const selectedStonebtnInDOM = document.querySelector('.btn-calculator-order');
const strCalculator = document.getElementById('calculator');
const strStoneSelection = document.getElementById('stone-selection');

function btnConfirmStones() {
  strStoneSelection.addEventListener('click', () => {
    strCalculator.classList.add('active');
    strStoneSelection.classList.remove('active');
  });
}
export default btnConfirmStones;
