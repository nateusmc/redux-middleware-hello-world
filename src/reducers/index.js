import { HELLO_WORLD, RESET_WORLD } from '../actions';

const initialState = {
  display: 'Empty',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, {
        display: 'Hello World',
      });
    case RESET_WORLD:
      return Object.assign({}, state, {
        display: 'Empty'
      })
  }
  return state;
};
