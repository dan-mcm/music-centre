import React, { Component } from "react";
import styled from "styled-components";

// Piano Images
import connolly from "../images/pianos/connolly-train.jpg";
import corktrain from "../images/pianos/cork-train.jpg";
import heuston from "../images/pianos/heuston-train.jpg";
import corkmetropolelid from "../images/pianos/metropole-grand-lid.jpg";
import corkmetropolelabel from "../images/pianos/metropole-owner.jpg";
import corkmetropole from "../images/pianos/metropole-grand.jpg";
import ferrycarrig from "../images/pianos/ferrycarrig-upright.jpg";
import ferrycarrigbrand from "../images/pianos/ferrycarrig-brand.jpg";
import powerscourtgrand from "../images/pianos/powerscourt-grand.jpg";
import powerscourtbrand from "../images/pianos/powerscourt-bechstein.jpg";

// Bio Images
import dangaming from "../images/bio/dmcm-gaming.jpg";
import dansuit from "../images/bio/dmcm-suit.jpg";
import danuku from "../images/bio/dmcm-uku.jpg";

const Wrapper = styled.div`
  margin: auto;
  width: 80%;
  text-align: center;
  border: 3px solid black;
  padding: 10px;
`;

const CenterBullets = styled.ul`
  list-style-position: inside
`;

const RotateImage = styled.img`
    transform: rotate(270deg);
    max-height: 300px;
`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>What is Music Centre?</h2>
          <p>
            This website aims to try and provide a well-rounded basis for the study of music.
            It examines the key aspects of music that should be studied i.e. the practical,
            aural and theoretical sides of the art form. It also aims to draw on my own and
            others personal experiences in music and how we have learned things along the way
            and how we can pool are resources together to come up with new more innovative methods towards teaching music.
          </p>
          <p>
            I hope this site will be of some use to those out there who want to take up an instrument and engage with the world of music.
            Music is everywhere and in the 21st century it's nearly impossible to think of landscapes separately to soundscapes.
          </p>
        </div>

        <hr />

        <div>
          <h2>Who is Music Centre?</h2>
          <div>
            <img src={dangaming}/>
            <img src={dansuit}/>
            <img src={danuku}/>
          </div>
          <p>
            That would be me - Dan. My own background in music revolves around several years of keyboard lessons, a few small piano
            lessons and a lot of self-teaching in Piano, Guitar (acoustic and electric), Bass, Tin Whistle,
            Recorder and Ukulele. On the theoretical side of things I have a Bachelor of Arts Degree in Geography
            and Music, a Professional Diploma in Education from NUI Maynooth, and a Higher Diploma in Computer Science.
            You can check out some nerdy compositions I made over <a href="https://github.com/daniel40392/MusicPrograms">here</a>.
          </p>
        </div>

        <hr />

        <div>
          <h2>Want to get in Contact?</h2>
          <p>Interesting in any of the following?</p>
          <CenterBullets>
            <li>Music Lessons (Piano/Guitar)</li>
            <li>Special Ocassion Performances</li>
            <li>Jamming Sessions / Accompanyment / Collaborations</li>
          </CenterBullets>
          <p>If yes feel free to contact me - <a href="mailto:info@music-centre.ie">info@music-centre.ie</a></p>
        </div>

        <hr />

        <div>
          <p>
            <h2>Piano's of Ireland I've Played</h2>
            <p>If you see me out performing be sure to say hi!</p>
          </p>
          <p>
            <h3>Train Stations (Looked after by <a href="https://www.murphypianotuning.ie/">Murphy's Piano Tuning</a>)</h3>
              <figure>
                <img src={connolly}/>
                <figcaption>Connolly Station - Dublin</figcaption>
              </figure>
              <figure>
                <img src={corktrain}/>
                <figcaption>Kent Station - Cork</figcaption>
              </figure>
              <figure>
                <img src={heuston}/>
                <figcaption>Heuston Station - Dublin</figcaption>
              </figure>
          </p>
          <hr />
          <p>
            <h3>Cork Metropole Hotel</h3>
            <img src={corkmetropole}/>
            <img src={corkmetropolelid}/>
            <img src={corkmetropolelabel}/>
          </p>
          <hr />
          <p>
            <h3>Wexford Ferrycarrig Hotel</h3>
            <img src={ferrycarrig}/>
            <img src={ferrycarrigbrand}/>
          </p>
          <hr />
          <p>
            <h3>Dublin Powerscourt Shopping Centre</h3>
            <img src={powerscourtgrand}/>
            <img src={powerscourtbrand}/>
          </p>
        </div>
      </Wrapper>
    );
  }
}
export default Home;
