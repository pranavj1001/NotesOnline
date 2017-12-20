import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { notesFetch } from '../actions';

class NotesList extends Component {
  componentWillMount() {
    this.props.notesFetch();
  }

  render() {
    return (
      <View>
        <Text>Testing List</Text>
        <Text>Testing List</Text>
        <Text>Testing List</Text>
        <Text>Testing List</Text>
        <Text>Testing List</Text>
      </View>
    );
  }
}

export default connect(null, { notesFetch })(NotesList);
