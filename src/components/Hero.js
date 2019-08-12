import React from 'react'
import {Hero, Container, Heading} from 'react-bulma-components/full'


export class HeroBanner extends React.Component{
  render (){
    return(
      <Hero color="primary" gradient>
        <Hero.Body>
          <Container className="has-text-centered">
            <Heading size={1}>Data Dash</Heading>
            <Heading subtitle size={5}>
              Big data within your reach...
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}
