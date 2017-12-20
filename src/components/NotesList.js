import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { notesFetch } from '../actions';

class NotesList extends Component {
  componentWillMount() {
    this.props.notesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of nextProps

    this.createDataSource(nextProps);
  }

  createDataSource({ notes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(notes);
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
