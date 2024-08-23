import { getEntrees } from './database.js';
import { setEntrees } from './transientState.js';

const entrees = getEntrees();

document.addEventListener('change', (event) => {
  if (event.target.name === 'entree') {
    const idValue = parseInt(event.target.value);
    setEntrees(idValue);
  }
});

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"

export const Entrees = () => {
  let html = '<ul>';
  const entreeInputOptions = entrees.map((entree) => {
    return `
        <li>
        <input type = "radio" name = "entree" value = ${entree.id}/> ${entree.name}
        </li>
        `;
  });

  html += entreeInputOptions.join('');
  html += '</ul>';

  return html;
};
