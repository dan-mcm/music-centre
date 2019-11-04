import React, { Component } from 'react';
import styled from 'styled-components';

const CustomerHeader = styled.header`
  margin: auto;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: DarkRed;
  min-width: 600px;
`;

const SiteTitle = styled.h1`
  color: white;
  font-family: 'Tangerine', serif;
  font-size: 50px;
`;

class Header extends Component {
  render() {
    return (
      <CustomerHeader>
        <SiteTitle>Music Centre</SiteTitle>
      </CustomerHeader>
    );
  }
}

export default Header;
