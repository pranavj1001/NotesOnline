import _ from 'lodash';
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
    console.log(this.props);
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

const mapStateToProps = (state) => {
  // state.notes is a object with many key value pairs
  // so iterate through every pair and run the arrow function
  // val is the user model i.e. title, note, phone and day
  // map function takes all these new objects and make it an array
  const notes = _.map(state.notes, (val, uid) => {
    // { title: 'list', note: 'get this', phone: '423214', day: 'Monday', id: '241nj13bkjs' }
    return { ...val, uid };
  });

  return { notes };
};

export default connect(mapStateToProps, { notesFetch })(NotesList);
