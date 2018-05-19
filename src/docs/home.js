import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Text, Link, Subheader } from './docs-components/typography'
import Pre from './docs-components/pre'
import { Code } from '@headlight/cosmos'

const Container = styled.div``

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading1>Getting Started</Heading1>
          <Subheader>Cosmos is a Design System to build Auth0 products.</Subheader>
          <Heading2>Installation</Heading2>
          <Text>
            To add <Code>cosmos</Code> to your react application, run
            <Pre>npm install --save @headlight/cosmos</Pre>
            If you prefer yarn, run this command instead:
            <Pre>yarn add @headlight/cosmos</Pre>
            That's all you need to do, you are now ready to use it in your app, no build step
            needed.
            <br />
            (This is the temporary package name, it will soon move to the{' '}
            <Code>HeadlightStudios/cosmos</Code>)
          </Text>

          <Heading2>Usage</Heading2>
          <Text>
            Import components that you want from the library
            <Pre code="import { Button } from '@headlight/cosmos'" />
            and use them along with you React components:
            <Pre
              code={`const Actions = () => <div>
  <Button appearance="primary" onClick={this.save}>Save changes</Button>
  <Button onClick={this.clear}>Clear</Button>
</div>`}
            />
          </Text>

          <Text>
            To learn more about the components and the <Code>props</Code> they offer, pick a
            component from the sidebar on the left.
          </Text>
          <Text>
            You can also look at example code from our Manage Clients{' '}
            <Link href="https://github.com/HeadlightStudios/cosmos/tree/master/src/manage">
              proof of concept repo.
            </Link>
          </Text>

          <Heading2>Feedback</Heading2>
          <Text>
            Issues or feature requests can be created on
            <Link href="https://github.com/HeadlightStudios/cosmos/issues">
              {' '}
              our GitHub page
            </Link>{' '}
            or <Link href="https://auth0.slack.com/messages/C5ZK0DD8X">on Slack</Link>.
          </Text>
        </Container>
      </div>
    )
  }
}

export default Home
