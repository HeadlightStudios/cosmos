import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, ButtonGroup } from '@headlight/cosmos'

storiesOf('Button').add('default', () => <Button>Button</Button>)
storiesOf('Button').add('primary', () => <Button appearance="primary">Button</Button>)
storiesOf('Button').add('seconadary', () => <Button appearance="seconadary">Button</Button>)
storiesOf('Button').add('link', () => <Button appearance="link">Button</Button>)
storiesOf('Button').add('destructive', () => <Button appearance="destructive">Button</Button>)
