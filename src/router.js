import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NotesList from './components/NotesList';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        <Scene key="notesList" component={NotesList} title="Your Notes" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
