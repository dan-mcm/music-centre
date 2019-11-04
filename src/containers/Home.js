import React, { Component } from 'react';
import {
  Wrapper,
  TextBlock,
  CenterBullets,
  Flip90Image,
  FlippedImage,
  StyledLink
} from '../utils/styles';

// Piano Images
import connolly from '../images/pianos/connolly-train.jpg';
import corktrain from '../images/pianos/cork-train.jpg';
import heuston from '../images/pianos/heuston-train.jpg';
import corkmetropolelid from '../images/pianos/metropole-grand-lid.jpg';
import corkmetropolelabel from '../images/pianos/metropole-owner.jpg';
import corkmetropole from '../images/pianos/metropole-grand.jpg';
import ferrycarrig from '../images/pianos/ferrycarrig-upright.jpg';
import ferrycarrigbrand from '../images/pianos/ferrycarrig-brand.jpg';
import powerscourtgrand from '../images/pianos/powerscourt-grand.jpg';
import powerscourtbrand from '../images/pianos/powerscourt-bechstein.jpg';

// Bio Images
import dangaming from '../images/bio/dmcm-gaming.jpg';
import dansuit from '../images/bio/dmcm-suit.jpg';
import danuku from '../images/bio/dmcm-uku.jpg';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <h2>What is Music Centre?</h2>
          <TextBlock>
            This website aims to try and provide a well-rounded basis for the
            study of music. It examines the key aspects of music that should be
            studied i.e. the practical, aural and theoretical sides of the art
            form. It also aims to draw on my own and others personal experiences
            in music and how we have learned things along the way and how we can
            pool are resources together to come up with new more innovative
            methods towards teaching music.
          </TextBlock>
          <TextBlock>
            I hope this site will be of some use to those out there who want to
            take up an instrument and engage with the world of music. Music is
            everywhere and in the 21st century it&#39;s nearly impossible to
            think of landscapes separately to soundscapes.
          </TextBlock>
        </div>

        <hr />

        <div>
          <h2>Who is Music Centre?</h2>
          {/* issue with flip images overlapping paragraph below */}
          <TextBlock>
            That would be me - Dan! My own background in music revolves around
            several years of keyboard lessons, a few small piano lessons and a
            lot of self-teaching in Piano, Guitar (acoustic and electric), Bass,
            Tin Whistle, Recorder and Ukulele. On the theoretical side of things
            I have a Bachelor of Arts Degree in Geography and Music, a
            Professional Diploma in Education from NUI Maynooth, and a Higher
            Diploma in Computer Science. You can check out some nerdy
            compositions I made over
            <StyledLink href="https://github.com/daniel40392/MusicPrograms">
              here
            </StyledLink>
            .
          </TextBlock>
          <br />
          <br />
          <br />
          <br />
          <div>
            <Flip90Image src={danuku} alt="Dan ukulele" />
            <Flip90Image src={dansuit} alt="Dan suit" />
            <Flip90Image src={dangaming} alt="Dan gaming" />
          </div>
          {/* issue with flip images overlapping paragraph below */}
          <br />
          <br />
          <br />
        </div>
        <hr />
        <div>
          <h2>Want to get in Contact?</h2>
          <p>Interested in any of the following?</p>
          <CenterBullets>
            <li>Music Lessons (Piano/Guitar)</li>
            <li>Special Ocassion Performances</li>
            <li>Jamming Sessions / Accompaniment / Collaborations</li>
          </CenterBullets>
          <p>
            If yes feel free to contact me -
            <StyledLink href="mailto:info@music-centre.ie">
              info@music-centre.ie
            </StyledLink>
          </p>
          <br />
        </div>

        <hr />

        <div>
          <h2>Pianos of Ireland I&#39;ve Played</h2>
          <p>If you see me out performing be sure to say hi!</p>
          <hr />
          <h3>
            Train Stations (Looked after by
            <StyledLink href="https://www.murphypianotuning.ie/">
              Murphy&#39;s Piano Tuning
            </StyledLink>
            )
          </h3>
          <p>Pictured: Connolly (Dublin) / Kent (Cork) / Heuston (Dublin)</p>
          <p>
            <img src={connolly} alt="Connolly station piano" />
            <img src={corktrain} alt="Kent station piano" />
            <img src={heuston} alt="Heuston station piano" />
            {/*
            <figure>
            <img src={connolly} alt="Connolly station piano"/>
            <figcaption>Connolly Station - Dublin</figcaption>
            </figure>
            <figure>
              <img src={corktrain} alt="Kent station piano"/>
              <figcaption>Kent Station - Cork</figcaption>
            </figure>
            <figure>
              <img src={heuston} alt="Heuston station piano"/>
              <figcaption>Heuston Station - Dublin</figcaption>
            </figure>
            */}
          </p>
          <hr />
          <h3>Wexford Ferrycarrig Hotel</h3>
          <p>
            <img src={ferrycarrig} alt="Ferrycarrig piano 1" />
            <FlippedImage src={ferrycarrigbrand} alt="Ferrycarrig piano 2" />
          </p>
          <hr />
          <h3>Cork Metropole Hotel</h3>
          <p>
            <img src={corkmetropole} alt="Cork Metropole hotel piano 1" />
            <img src={corkmetropolelid} alt="Cork Metropole hotel piano 2" />
            <img src={corkmetropolelabel} alt="Cork Metropole hotel piano 3" />
          </p>
          <hr />
          <h3>Dublin Powerscourt Shopping Centre</h3>
          <p>
            <img src={powerscourtgrand} alt="Powerscourt piano 1" />
            <img src={powerscourtbrand} alt="Powerscourt piano 2" />
          </p>
        </div>
      </Wrapper>
    );
  }
}
export default Home;
