import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Form } from '@headlight/cosmos'

storiesOf('Form').add('actions: primary', () => (
  <Example title="primary">
    <Form>
      <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
    </Form>
  </Example>
))

storiesOf('Form').add('actions: primary + secondary', () => (
  <Example title="primary + secondary">
    <Form>
      <Form.Actions
        primaryAction={{ label: 'Save Changes', method: () => {} }}
        secondaryActions={[
          { label: 'Try', icon: 'play', method: () => {} },
          { label: 'Debug', method: () => {} }
        ]}
      />
    </Form>
  </Example>
))
