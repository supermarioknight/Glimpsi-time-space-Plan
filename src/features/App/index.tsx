import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const Root = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render () {
    return (
      <Root>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>

        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Root>
    );
  }
}

export default App;
