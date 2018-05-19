import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Avatar } from '@headlight/cosmos'

storiesOf('Avatar').add('sizes', () => (
  <Example title="Sizes">
    <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="small" />
    <br />
    <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="medium" />
    <br />
    <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="large" />
  </Example>
))

storiesOf('Avatar').add('with name', () => (
  <Example title="With Name">
    <Avatar
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      size="small"
      name="Cosmos DS"
    />
    <br />
    <Avatar
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      size="medium"
      name="Cosmos DS"
    />
    <br />
    <Avatar
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      size="large"
      name="Cosmos DS"
    />
  </Example>
))
