import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Form } from '@headlight/cosmos'

storiesOf('Form').add('layouts', () => (
  <div>
    <Example title="label-on-left">
      <Form>
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
      </Form>
    </Example>
    <Example title="label-on-top">
      <Form layout="label-on-top">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
      </Form>
    </Example>
  </div>
))
