const initialState = {
    nbr: 0
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, nbr: state.nbr + 1 };
      case 'DECREMENT':
        return { ...state, nbr: Math.max(0, state.nbr - 1) };
      default:
        return state;
    }
  };
  
  export default cartReducer;