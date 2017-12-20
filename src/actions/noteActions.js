import firebase from 'firebase';
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
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .push({ title, note, phone, day });
};
