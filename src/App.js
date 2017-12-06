import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

const store = createStore(reducers);

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      // your config details go here
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;