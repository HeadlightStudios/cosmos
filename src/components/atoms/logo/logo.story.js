import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Logo } from '@headlight/cosmos'

storiesOf('Logo').add('default', () => (
  <Example title="default">
    <Logo />
  </Example>
))

storiesOf('Logo').add('dark background', () => (
  <Example title="dark background" background="dark">
    <Logo />
  </Example>
))
