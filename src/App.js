import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';

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
          <Text>
              Hey, There!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
