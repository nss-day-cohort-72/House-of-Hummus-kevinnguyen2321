import { getVeggies} from './database.js';
import { setVeggie } from './transientState.js';

const veggies = getVeggies();

document.addEventListener('change', (event) => {
  if (event.target.name === 'vegetable') {
    const idValue = parseInt(event.target.value);
    setVeggie(idValue);
  }
});

export const Veggies = () => {
  let html = `<ul>`;

  const veggiesList = veggies.map((vegetable) => {
    return `<li>
                <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
            </li>`;
  });

  html += veggiesList.join('');
  html += `
  </ul>
  `;

  return html;
};
