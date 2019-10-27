import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  width: 70%;
  text-align: center;
  padding: 10px;
  background-color: white;
`;

const NonbulletList = styled.ul`
  list-style: none
`;

class UsefulLinks extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>Sheet Music & Chord Resources</h2>
          <NonbulletList>
            <li><a href="http://imslp.org/">International Music Score Library Project (IMSLP)</a></li>
            <li><a href="https://www.ultimate-guitar.com/">Ultimate-Guitar</a></li>
          </NonbulletList>
        </div>
        <div>
          <h2>Piano Tuning</h2>
          <NonbulletList>
            <li><a href="https://www.murphypianotuning.ie/">Murph Piano Tuning & Repair</a></li>
            <li><a href="https://www.foxandwolfe.com/">Fox & Wolfe</a></li>
          </NonbulletList>
        </div>
        <div>
          <h2>Music Stores</h2>
          <NonbulletList>
            <li><a href="https://www.musicmaker.ie/">MusicMaker</a></li>
            <li><a href="http://www.musicroom.com/">Musicroom</a></li>
          </NonbulletList>
        </div>
        <div>
          <h2>Academic Resources</h2>
          <NonbulletList>
            <li><a href="http://www.smei.ie/">Society for Music Education Ireland</a></li>
            <li><a href="http://www.ictm.ie/">International Council for Traditional Music Ireland</a></li>
            <li><a href="http://www.bachtrack.com/">Bachtrack</a></li>
          </NonbulletList>
        </div>
        <div>
          <h2>YouTube</h2>
          <NonbulletList>
            <li><a href="https://www.youtube.com/channel/UCAzKFALPuF_EPe-AEI0WFFw">TwoSetViolin</a></li>
          </NonbulletList>
        </div>
        <div>
          <h2>Twitch</h2>
          <NonbulletList>
            <li><a href="https://www.twitch.tv/sienimiili">sienimiili</a></li>
            <li><a href="hhttps://www.twitch.tv/thatviolinchick">thatviolinchick</a></li>
            <li><a href="https://www.twitch.tv/malukah">malukah</a></li>
          </NonbulletList>
        </div>
      </Wrapper>
    );
  }
}

export default UsefulLinks;
