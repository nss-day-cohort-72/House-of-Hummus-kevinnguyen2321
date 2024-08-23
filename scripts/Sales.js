import { getVeggies, getPurchases, getEntrees, getSides } from './database.js';

const buildOrderListItem = (order) => {
  const veggies = getVeggies();
  const entrees = getEntrees();
  const sideDishes = getSides();

  const veggiePrice = veggies.find(
    (veggie) => veggie.id === order.vegetableId
  ).price;

  const entreePrice = entrees.find(
    (entree) => entree.id === order.entreeId
  ).price;

  const sidePrice = sideDishes.find(
    (sideDish) => sideDish.id === order.sideId
  ).price;

  const total = veggiePrice + entreePrice + sidePrice;

  return `<li>
        Receipt #${order.id} = ${total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })}
    </li>`;
};

export const Sales = () => {
  const sales = getPurchases();

  return `
        <ul>
            ${sales
              .map((sale) => {
                // Reflect: What is the scope of this `return` keyword?
                return buildOrderListItem(sale);
              })
              .join('')}
        </ul>
    `;
};
