import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Form } from '@headlight/cosmos'

storiesOf('Form').add('text field', () => (
  <Example title="text field">
    <Form>
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    </Form>
  </Example>
))

storiesOf('Form').add('text field + error', () => (
  <Example title="text field + error">
    <Form>
      <Form.TextInput
        label="Field label"
        error="Everything is broken"
        type="text"
        placeholder="Enter something"
      />
    </Form>
  </Example>
))

storiesOf('Form').add('text field + actions', () => (
  <Example title="text field + actions">
    <Form>
      <Form.TextInput
        label="Field label"
        type="text"
        placeholder="Enter something"
        actions={[
          { icon: 'copy', method: () => {}, label: 'Copy to clipboard' },
          { icon: 'delete', method: () => {}, label: 'Delete' }
        ]}
      />
    </Form>
  </Example>
))
