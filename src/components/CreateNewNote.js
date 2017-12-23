import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { noteUpdate, noteCreate } from '../actions';

class CreateNewNote extends Component {
  onButtonPress() {
    const { title, note, phone, day } = this.props;
    this.props.noteCreate({ title, note, phone, day: day || 'Monday' });
  }

    render() {
      return (
        <Card>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save
            </Button>
          </CardSection>
        </Card>
      );
    }
}

const mapStateToProps = (state) => {
  const { title, note, phone, day } = state.noteForm;
  return { title, note, phone, day };
};

export default connect(mapStateToProps, { noteUpdate, noteCreate })(CreateNewNote);
