import { MOVE_LEFT, MOVE_RIGHT, SEARCH_LEFT, SEARCH_RIGHT } from './actions';

const initialState = {
  leftItems: [
    { id: 1, name: 'Apple' },
     { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
     { id: 4, name: 'Kiwi' },
    { id: 5, name: 'Coconut' },
    { id: 6, name: 'Mango' },
    
  ],
  rightItems: [
    { id: 7, name: 'Pineapple' },
     { id: 8, name: 'Grapes' },
    { id: 9, name: 'Watermelon' },
    
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_LEFT:
      return {
        ...state,
        leftItems: state.leftItems.concat(action.payload),
        rightItems: state.rightItems.filter(item => !action.payload.includes(item)),
        };
    case MOVE_RIGHT:
      return {
        ...state,
        rightItems: state.rightItems.concat(action.payload),
        leftItems: state.leftItems.filter(item => !action.payload.includes(item)),
      } ;
    case SEARCH_LEFT:
      const leftFilteredItems = initialState.leftItems.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
       );
      return {
        ...state,
          leftItems: leftFilteredItems,
      };
    case SEARCH_RIGHT:
      const rightFilteredItems = initialState.rightItems.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
          rightItems: rightFilteredItems,
      };
      default:
      return state;
  }
};

export default rootReducer;
