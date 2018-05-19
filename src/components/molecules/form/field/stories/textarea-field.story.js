import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Form } from '@headlight/cosmos'

storiesOf('Form').add('textarea field', () => (
  <Example title="textarea field">
    <Form>
      <Form.TextArea label="Field label" type="text" placeholder="Enter something" />
    </Form>
  </Example>
))

storiesOf('Form').add('textarea field + error', () => (
  <Example title="textarea field + error">
    <Form>
      <Form.TextArea
        label="Field label"
        error="Everything is broken"
        type="text"
        placeholder="Enter something"
      />
    </Form>
  </Example>
))
