import { Map } from '../../Logic/MapLogic.js';

function mapButton() {
  const openMap = document.getElementById('openMap');

  openMap.addEventListener('click', () => {
    Map();
  });
}
export { mapButton };
