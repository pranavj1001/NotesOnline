// Import libraries to create components
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, buttonTextStyle } = styles;

  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={buttonTextStyle}>{ props.children }</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6ae368',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#6ae368',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
