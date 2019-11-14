import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../utils/styles';

const NotFound = () => (
  <Wrapper>
    <h1>
      Page Not Found!
      <span role="img" aria-label="poop-emoji">
        💩
      </span>
    </h1>

    <center>
      <img
        src="https://media1.tenor.com/images/f57f77c061d305b404fa5b5f90a3bf0d/tenor.gif?itemid=7860818"
        alt="Jeff Gerstmann Disapproval"
      />
    </center>
    <center>
      <b>
        Let&apos;s get you back <Link to="/">home</Link>.
      </b>
    </center>
  </Wrapper>
);

export default NotFound;
