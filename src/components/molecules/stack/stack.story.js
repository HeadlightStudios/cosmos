import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@headlight/cosmos/_helpers/story-helpers'

import { Stack } from '@headlight/cosmos'

const Box = () => (
  <div style={{ height: '50px', width: '50px', background: '#EEE', margin: '5px' }} />
)

storiesOf('Stack').add('default', () => (
  <Example title="default">
    <Stack align="left">
      <Box />
      <Box />
      <Box />
    </Stack>
  </Example>
))

storiesOf('Stack').add('right', () => (
  <Example title="right">
    <Stack align="right">
      <Box />
      <Box />
      <Box />
    </Stack>
  </Example>
))

storiesOf('Stack').add('widths', () => (
  <Example title="widths">
    <Stack widths={[10, 30, 30, 30]}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  </Example>
))
