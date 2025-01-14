const initialState = {
  counter: 100,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    default:
      return state;
  }
};
