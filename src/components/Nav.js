import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "grid-styled";

class Nav extends Component {
  render() {
    return (
      <div>
        <hr/>
        <Flex flexWrap="wrap">
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <Link to="/">Home</Link></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <Link to="/methodology">Methodology</Link></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <Link to="/music-theory">Music Theory</Link></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <Link to="/useful-links">Useful Links</Link></Box>
          <Box px={2} py={3} width={[1, 1 / 5]}>
          <Link to="/social">Social</Link></Box>
        </Flex>
        <hr/>
      </div>
    );
  }
}

export default Nav;
