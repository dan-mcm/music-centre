import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const CustomNav = styled.div`
  background-image:  url("/beanstalk-dark.png");
  background-repeat: repeat;
`

const CustomLink = styled(Link)`
  color: white;
`

class Nav extends Component {
  render() {
    return (
      <CustomNav>
        <Flex flexWrap="wrap">
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <CustomLink to="/">Home</CustomLink></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <CustomLink to="/methodology">Methodology</CustomLink></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <CustomLink to="/music-theory">Music Theory</CustomLink></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <CustomLink to="/useful-links">Useful Links</CustomLink></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <CustomLink to="/social">Social</CustomLink></Box>
        </Flex>
      </CustomNav>
    );
  }
}

export default Nav;
