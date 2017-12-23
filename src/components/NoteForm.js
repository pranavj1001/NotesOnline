import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { noteUpdate } from '../actions';
import { CardSection, Input } from './common';

class NoteUpdateForm extends Component {
  render() {
    return (
      <View>
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Select the day</Text>
          <Picker
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
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 10
  }
};

const mapStateToProps = (state) => {
  const { title, note, phone, day } = state.noteForm;
  return { title, note, phone, day };
};

export default connect(mapStateToProps, { noteUpdate })(NoteUpdateForm);
