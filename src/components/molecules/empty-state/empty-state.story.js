import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { EmptyState } from '@headlight/cosmos'

storiesOf('EmptyState').add('default', () => (
  <Example title="default">
    <EmptyState
      title="Clients"
      text="Add some clients to get started"
      icon="users"
      helpUrl="https://auth0.com"
      action={{
        icon: 'plus',
        text: 'Create Client',
        method: () => {}
      }}
    />
  </Example>
))
