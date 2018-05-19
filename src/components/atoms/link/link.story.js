import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Link } from '@headlight/cosmos'

storiesOf('Link').add('default', () => (
  <Example title="default">
    <Link href="https://auth0.com" target="_self">
      Click me!
    </Link>
  </Example>
))

storiesOf('Link').add('dark background', () => (
  <Example title="dark background" background="dark">
    <Link href="https://auth0.com" target="_self">
      Click me!
    </Link>
  </Example>
))
