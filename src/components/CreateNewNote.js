import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { noteUpdate } from '../actions';

class CreateNewNote extends Component {
    render() {
      return (
        <Card>
          <CardSection>
            <Input
              label="Title"
              placeholder="Shopping List"
              value={this.props.title}
              onChangeText={value => this.props.noteUpdate({ prop: 'title', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Note"
              placeholder="milk, cheese and salt"
              value={this.props.note}
              onChangeText={value => this.props.noteUpdate({ prop: 'note', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Phone"
              placeholder="9876543210"
              value={this.props.phone}
              onChangeText={value => this.props.noteUpdate({ prop: 'phone', value })}
            />
          </CardSection>

          <CardSection>
            <Button>Save</Button>
          </CardSection>
        </Card>
      );
    }
}

const mapStateToProps = (state) => {
  const { title, note, phone } = state.noteForm;
  return { title, note, phone };
};

export default connect(mapStateToProps, { noteUpdate })(CreateNewNote);
