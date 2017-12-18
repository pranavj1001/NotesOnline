import {
  NOTE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  note: '',
  phone: '',
  day: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTE_UPDATE:
      // action.payload === { prop: 'title' value: 'Shopping List' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
    return state;
  }
};
