import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NOTE_UPDATE,
  NOTE_CREATE,
  NOTES_FETCH_SUCCESS,
  NOTE_SAVE_SUCCESS,
  NOTES_CLEAR_CACHE
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
    // this event handler will last for the entire lifecycle of this app
    // it will automatically dispatch the action to the reducer
      .on('value', snapshot => {
        dispatch({
          type: NOTES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const noteSave = ({ title, note, phone, day, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .set({ title, note, phone, day, uid })
      .then(() => {
        dispatch({
          type: NOTE_SAVE_SUCCESS
        });
        Actions.main({ type: 'reset' });
      });
  };
};

export const clearState = () => {
  return {
    type: NOTES_CLEAR_CACHE,
  };
};

export const noteDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: 'reset' });
      });
  };
};
