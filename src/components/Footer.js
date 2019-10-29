import React, { Component } from "react";
import styled from "styled-components";

const CustomerFooter = styled.footer`
  margin: auto;
  text-align: center;
  padding: 30px;
  background-color: DarkRed;
  color: white;
  border-top: 2px solid black;
  line-height: 1.6;
`;

const CustomLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

class Footer extends Component {
  render() {
    return (
      <CustomerFooter>
        <CustomLink href="https://github.com/daniel40392">Daniel McMahon</CustomLink> 2019 ©
      </CustomerFooter>
    );
  }
}

export default Footer;
