import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
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
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.day}
              onValueChange={value => this.props.noteUpdate({ prop: 'day', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>

          <CardSection>
            <Button>Save</Button>
          </CardSection>
        </Card>
      );
    }
}

const mapStateToProps = (state) => {
  const { title, note, phone, day } = state.noteForm;
  return { title, note, phone, day };
};

export default connect(mapStateToProps, { noteUpdate })(CreateNewNote);
