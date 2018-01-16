import { HELLO_WORLD } from '../actions';

const initialState = {
  display: 'Hello',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, {
        display: 'Hello World',
      });
  }
  return state;
};
