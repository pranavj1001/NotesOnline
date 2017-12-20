import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NOTE_UPDATE,
  NOTE_CREATE,
  NOTES_FETCH_SUCCESS
} from './types';

export const noteUpdate = ({ prop, value }) => {
  return {
    type: NOTE_UPDATE,
    payload: { prop, value }
  };
};

export const noteCreate = ({ title, note, phone, day }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .push({ title, note, phone, day })
      .then(() => {
        dispatch({ type: NOTE_CREATE });
        Actions.main({ type: 'reset' });
      });
  };
};

export const notesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .on('value', snapshot => {
        dispatch({
          type: NOTES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
