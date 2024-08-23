//transient State//
export const transientState = {
  id: 1,
  entreeId: 0,
  vegetableId: 0,
  sideId: 0,
};

//Set functions//
export const setEntrees = (chosenEntree) => {
  transientState.entreeId = chosenEntree;
  console.log(transientState);
};

export const setVeggie = (chosenVeggie) => {
  transientState.vegetableId = chosenVeggie;
  console.log(transientState);
};

export const setSide = (chosenSideDish) => {
  transientState.sideId = chosenSideDish;
  console.log(transientState);
};

//Function to reset transientState//
export const resetTransientState = () => {
  transientState.entreeId = 0;
  transientState.vegetableId = 0;
  transientState.sideId = 0;
};
