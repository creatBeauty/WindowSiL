const selectedStonebtnInDOM = document.querySelector('.btn-calculator-order');
const strCalculator = document.getElementById('calculator');
const strStoneSelection = document.getElementById('stone-selection');

function btnGetStonesCalculator() {
  selectedStonebtnInDOM.addEventListener('click', () => {
    strCalculator.classList.remove('active');
    strStoneSelection.classList.add('active');
  });
}
export default btnGetStonesCalculator;
