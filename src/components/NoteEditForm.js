import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { Card, CardSection, Button } from './common';

class NoteEditForm extends Component {
  render() {
    return (
      <Card>
        <NoteForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, {})(NoteEditForm);
