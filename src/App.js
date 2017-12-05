import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore();

class App extends Component {
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
