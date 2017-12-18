import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class CreateNewNote extends Component {
    render() {
      return (
        <Card>
          <CardSection>
            <Input
              label="Title"
              placeholder="Shopping List"
            />
          </CardSection>

          <CardSection>
            <Input
              label="Note"
              placeholder="milk, cheese and salt"
            />
          </CardSection>

          <CardSection>
            <Input
              label="Phone"
              placeholder="9876543210"
            />
          </CardSection>

          <CardSection>
            <Button>Save</Button>
          </CardSection>
        </Card>
      );
    }
}

export default CreateNewNote;
