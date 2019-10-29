import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed';
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  width: 20%;
  min-width: 600px;
  text-align: center;
  padding: 10px;
  background-color: white;
  line-height: 1.6;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: DarkRed;
  &:hover {
    text-decoration: underline;
  }
`

class Social extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>Want to be featured here?</h2>
          <p>Feel free to reach out to <StyledLink href="mailto:info@music-centre.ie">info@music-centre.ie</StyledLink> with a link to your Instagram account</p>
        </div>
        <br/>
        <div>
          <InstagramEmbed
          url='https://www.instagram.com/p/B29KkDGg-iZ'
          maxWidth={400}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Social;
