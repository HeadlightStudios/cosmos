import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Code } from '@headlight/cosmos'

storiesOf('Code').add('default', () => (
  <Example title="Code">
    This is a <Code>special</Code> word
  </Example>
))
