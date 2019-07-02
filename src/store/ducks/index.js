import { combineReducers } from 'redux';

export default combineReducers({
  example: (state = [], action) => {
    switch (action.type) {
      case 'example/request':
      case 'example/success':
        return [...state, action.payload.message];
      default:
        return state;
    }
  },
});
