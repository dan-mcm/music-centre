import React, { Component } from "react";
import styled from "styled-components";

const CustomerHeader = styled.header`
  margin: auto;
  text-align: center;
  padding: 10px;
  background-color: DarkRed;
`;

const SiteTitle = styled.h1`
  color: white;
`

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
