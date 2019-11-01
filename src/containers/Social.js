import React, { Component } from "react";
import { Wrapper, StyledLink } from "../utils/styles.js"
import InstagramEmbed from 'react-instagram-embed';

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
