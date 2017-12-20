import {
  NOTES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTES_FETCH_SUCCESS:
      console.log(action);
      return state;
    default:
    return state;
  }
};
