import React, { Component } from 'react';
import { Wrapper, NonbulletList, StyledLink } from '../utils/styles';

class UsefulLinks extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>Sheet Music & Chord Resources</h2>
          <NonbulletList>
            <li>
              <StyledLink href="http://imslp.org/">
                International Music Score Library Project (IMSLP)
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://www.ultimate-guitar.com/">
                Ultimate-Guitar
              </StyledLink>
            </li>
          </NonbulletList>
        </div>
        <br />
        <hr />
        <div>
          <h2>Piano Tuning</h2>
          <NonbulletList>
            <li>
              <StyledLink href="https://www.murphypianotuning.ie/">
                Murph Piano Tuning & Repair
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://www.foxandwolfe.com/">
                Fox & Wolfe
              </StyledLink>
            </li>
          </NonbulletList>
        </div>
        <br />
        <hr />
        <div>
          <h2>Music Stores</h2>
          <NonbulletList>
            <li>
              <StyledLink href="https://www.musicmaker.ie/">
                MusicMaker
              </StyledLink>
            </li>
            <li>
              <StyledLink href="http://www.musicroom.com/">
                Musicroom
              </StyledLink>
            </li>
          </NonbulletList>
        </div>
        <br />
        <hr />
        <div>
          <h2>Academic Resources</h2>
          <NonbulletList>
            <li>
              <StyledLink href="http://www.smei.ie/">
                Society for Music Education Ireland
              </StyledLink>
            </li>
            <li>
              <StyledLink href="http://www.ictm.ie/">
                International Council for Traditional Music Ireland
              </StyledLink>
            </li>
            <li>
              <StyledLink href="http://www.bachtrack.com/">
                Bachtrack
              </StyledLink>
            </li>
          </NonbulletList>
        </div>
        <br />
        <hr />
        <div>
          <h2>YouTube</h2>
          <NonbulletList>
            <li>
              <StyledLink href="https://www.youtube.com/channel/UCAzKFALPuF_EPe-AEI0WFFw">
                TwoSetViolin
              </StyledLink>
            </li>
          </NonbulletList>
        </div>
        <br />
        <hr />
        <div>
          <h2>Twitch</h2>
          <NonbulletList>
            <li>
              <StyledLink href="https://www.twitch.tv/sienimiili">
                sienimiili
              </StyledLink>
            </li>
            <li>
              <StyledLink href="hhttps://www.twitch.tv/thatviolinchick">
                thatviolinchick
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://www.twitch.tv/malukah">
                malukah
              </StyledLink>
            </li>
          </NonbulletList>
        </div>
        <br />
      </Wrapper>
    );
  }
}

export default UsefulLinks;
