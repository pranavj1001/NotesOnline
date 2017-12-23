import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { noteUpdate, noteSave } from '../actions';
import { Card, CardSection, Button } from './common';

class NoteEditForm extends Component {
  componentWillMount() {
    _.each(this.props.notes, (value, prop) => {
      this.props.noteUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, note, phone, day } = this.props;
    this.props.noteSave({ title, note, phone, day, uid: this.props.notes.uid });
  }

  onTextPress() {
    const { title, note, phone, day } = this.props;
    const message = `This is reminder for your note: '${title}'. ` +
    `The content is: '${note}'. The day is set to ${day}`;
    Communications.text(phone, message);
  }

  render() {
    return (
      <Card>
        <NoteForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Reminder
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

export default connect(mapStateToProps, { noteUpdate, noteSave })(NoteEditForm);
