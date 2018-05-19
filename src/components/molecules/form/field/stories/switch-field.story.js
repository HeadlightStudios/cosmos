import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Form } from '@headlight/cosmos'

storiesOf('Form').add('switch field', () => (
  <Example title="switch field">
    <Form>
      <Form.Switch label="Subscribe" on />
    </Form>
  </Example>
))

storiesOf('Form').add('switch field + error', () => (
  <Example title="switch field + error">
    <Form>
      <Form.Switch label="Subscribe" on error="Everything is broken" />
    </Form>
  </Example>
))
