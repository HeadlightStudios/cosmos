import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@headlight/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@headlight/cosmos'

storiesOf('Button').add('dark background', () => (
  <Example title="Dark background" background="dark">
    <div>
      <Stack>
        <Button>Button</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="link">Link</Button>
        <Button appearance="destructive">Destructive</Button>
      </Stack>
    </div>
    <br />
    <div>
      <Stack>
        <Button disabled>Button</Button>
        <Button disabled appearance="primary">
          Primary
        </Button>
        <Button disabled appearance="secondary">
          Secondary
        </Button>
        <Button disabled appearance="link">
          Link
        </Button>
        <Button disabled appearance="destructive">
          Destructive
        </Button>
      </Stack>
    </div>
    <br />
    <div>
      <Stack>
        <Button loading>Button</Button>
        <Button loading appearance="primary">
          Primary
        </Button>
        <Button loading appearance="secondary">
          Secondary
        </Button>
        <Button loading appearance="link">
          Link
        </Button>
        <Button loading appearance="destructive">
          Destructive
        </Button>
      </Stack>
    </div>
    <br />
    <div>
      <Stack>
        <Button icon="delete" />
        <Button appearance="primary" icon="delete" />
        <Button appearance="link" icon="delete" />
        <Button appearance="secondary" icon="delete" />
        <Button appearance="destructive" icon="delete" />
      </Stack>
    </div>
  </Example>
))
