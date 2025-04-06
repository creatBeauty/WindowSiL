const selectedStonebtnInDOM = document.querySelector('.btn-calculator-order');
const strCalculator = document.getElementById('calculator');
const strStoneSelection = document.getElementById('stone-selection');
const stoneSelections = document.querySelectorAll('.grid-element');

function btnGetStonesCalculator() {
  selectedStonebtnInDOM.addEventListener('click', () => {
    strCalculator.classList.remove('active');
    strStoneSelection.classList.add('active');
    stoneSelections.forEach((el) => {
      el.style.background = '#585f73';
    });
  });
}

export default btnGetStonesCalculator;
