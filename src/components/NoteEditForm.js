import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { noteUpdate } from '../actions';
import { Card, CardSection, Button } from './common';

class NoteEditForm extends Component {
  componentWillMount() {
    _.each(this.props.notes, (value, prop) => {
      this.props.noteUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, note, phone, day } = this.props;
    console.log(title, note, phone, day);
  }

  render() {
    return (
      <Card>
        <NoteForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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

export default connect(mapStateToProps, { noteUpdate })(NoteEditForm);
