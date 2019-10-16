import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed';
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  width: 20%;
  text-align: center;
  padding: 10px;
`;

class Social extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>Want to be featured here?</h2>
          <p>Feel free to reach out to <a href="mailto:info@music-centre.ie">info@music-centre.ie</a> with a link to your Instagram account</p>
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
