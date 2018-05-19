import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Spinner } from '@headlight/cosmos'

storiesOf('Spinner').add('default', () => (
  <Example title="Spinner">
    <Spinner />
  </Example>
))

storiesOf('Spinner').add('dark background', () => (
  <Example title="Spinner" background="dark">
    <Spinner inverse />
  </Example>
))
