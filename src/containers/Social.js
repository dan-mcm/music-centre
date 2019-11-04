import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Wrapper, StyledLink } from '../utils/styles';

class Social extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>Want to be featured here?</h2>
          <p>
            Feel free to reach out to{' '}
            <StyledLink href="mailto:info@music-centre.ie">
              info@music-centre.ie
            </StyledLink>{' '}
            with a link to your Instagram account
          </p>
        </div>
        <br />
        <div>
          <InstagramEmbed
            injectScript
            url="https://www.instagram.com/p/B29KkDGg-iZ"
            maxWidth={400}
            hideCaption={false}
            containerTagName="div"
            protocol=""
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
