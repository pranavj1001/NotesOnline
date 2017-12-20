import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class NoteListItem extends Component {
  render() {
    const { title } = this.props.notes;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default NoteListItem;
