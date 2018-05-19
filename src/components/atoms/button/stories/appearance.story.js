import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@headlight/cosmos'

storiesOf('Button').add('appearance', () => (
  <Example title="Appearances">
    <Stack>
      <Button>Button</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="link">Link</Button>
      <Button appearance="destructive">Destructive</Button>
    </Stack>
  </Example>
))
