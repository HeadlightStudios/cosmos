import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Icon } from '@headlight/cosmos'
import { spacing, colors } from '@headlight/cosmos/tokens'

storiesOf('Icon').add('default', () => (
  <Example title="Icons">
    <Stack>
      <Icon name="analytics" />
      <Icon name="anomaly-detection" />
      <Icon name="apis" />
      <Icon name="arrow-left" />
      <Icon name="arrow-right" />
      <Icon name="authorization" />
      <Icon name="check" />
    </Stack>
  </Example>
))

storiesOf('Icon').add('size', () => (
  <Example title="Size">
    <Stack>
      <Icon name="analytics" size={spacing.xsmall} />
      <Icon name="analytics" size={spacing.small} />
      <Icon name="analytics" size={spacing.medium} />
      <Icon name="analytics" size={spacing.large} />
      <Icon name="analytics" size={spacing.xlarge} />
      <Icon name="analytics" size={spacing.xxlarge} />
    </Stack>
  </Example>
))

storiesOf('Icon').add('color', () => (
  <Example title="Size">
    <Stack>
      <Icon name="analytics" color={colors.base.white} />
      <Icon name="analytics" color={colors.base.black} />
      <Icon name="analytics" color={colors.base.gray} />
      <Icon name="analytics" color={colors.base.blue} />
      <Icon name="analytics" color={colors.base.orange} />
      <Icon name="analytics" color={colors.base.green} />
      <Icon name="analytics" color={colors.base.red} />
    </Stack>
  </Example>
))

storiesOf('Icon').add('dark-background', () => (
  <Example title="Dark background" background="dark">
    <Stack>
      <Icon name="analytics" color={colors.base.white} />
      <Icon name="analytics" color={colors.base.black} />
      <Icon name="analytics" color={colors.base.gray} />
      <Icon name="analytics" color={colors.base.blue} />
      <Icon name="analytics" color={colors.base.orange} />
      <Icon name="analytics" color={colors.base.green} />
      <Icon name="analytics" color={colors.base.red} />
    </Stack>
  </Example>
))
