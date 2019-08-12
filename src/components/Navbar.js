import React from 'react'
import {Navbar} from 'react-bulma-components/full'
// import Logo from './public/img/data_dash.png'


export class NavbarMenu extends React.Component{
  render (){
    return(
      <Navbar color="light" gradient="true">
          <Navbar.Brand>
            <Navbar.Item>
            <img
              src="https://bulma.io/images/bulma-logo.png" width="112" height="28"
              alt="Bulma: a modern CSS framework based on Flexbox"
              />
            </Navbar.Item>
          </Navbar.Brand>

          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item>
                Charts
              </Navbar.Item>

              <Navbar.Item>
                Tables
              </Navbar.Item>

            </Navbar.Container>
          </Navbar.Menu>
      </Navbar>
    )
  }
}
