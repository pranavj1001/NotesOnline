import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NotesList from './components/NotesList';
import CreateNewNote from './components/CreateNewNote';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Stack key="authentication">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Stack>

        <Stack key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.createNewNote()}
            key="notesList"
            component={NotesList}
            title="Your Notes"
            initial
          />
          <Scene key="createNewNote" component={CreateNewNote} title="New Note" />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
