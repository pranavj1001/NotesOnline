import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NotesList from './components/NotesList';

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
            onRight={() => console.log('Hey')}
            key="notesList"
            component={NotesList}
            title="Your Notes"
          />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
