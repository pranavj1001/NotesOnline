import {
  NOTE_UPDATE
} from './types';

export const noteUpdate = ({ prop, value }) => {
  return {
    type: NOTE_UPDATE,
    payload: { prop, value }
  };
};

export const noteCreate = ({ title, note, phone, day }) => {
  console.log(title, note, phone, day);
};
