import { getSides} from './database.js';
import { setSide } from './transientState.js';

const sideDishes = getSides();

document.addEventListener('change', (event) => {
  if (event.target.name === 'sideDish') {
    const idValue = parseInt(event.target.value);
    setSide(idValue);
  }
});

// Requirement: The radio input elements that this component function renders must all have a name of "sideDish"
export const Sides = () => {
  let html = '<ul>';

  const listItems = sideDishes.map((dish) => {
    return `<li>
            <input type="radio" name = "sideDish" value = "${dish.id}" /> ${dish.title}
        </li>`;
  });

  html += listItems.join('');
  html += '</ul>';

  return html;
};
