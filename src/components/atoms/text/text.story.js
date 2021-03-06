import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Text } from '@headlight/cosmos'

storiesOf('Text').add('default', () => (
  <Example title="Text">
    <Text>Good design is good business</Text>
  </Example>
))

storiesOf('Text').add('allcaps', () => (
  <Example title="Text">
    <Text type="allcaps">Good design is good business</Text>
  </Example>
))

storiesOf('Text').add('subdued', () => (
  <Example title="Text">
    <Text type="subdued">Good design is good business</Text>
  </Example>
))
