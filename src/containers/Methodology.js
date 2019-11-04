import React, { Component } from 'react';
import { Wrapper, NonbulletList, TextBlock, StyledLink } from '../utils/styles';

class Methodology extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Different Methods for Different People</h2>

        <TextBlock>
          All music can be categorized under three broad categories: Classical,
          Folk and Popular.
        </TextBlock>
        <br />
        <TextBlock>
          I would suggest that there are three ways of learning music and that
          each method lends itself particularly well to a specific genre:
        </TextBlock>

        <NonbulletList>
          <li>
            The use of sight-reading is most often used in a{' '}
            <StyledLink href="#classical">classical context</StyledLink>
          </li>
          <li>
            The use of aural exposure and repetition is a method utilized most
            often in{' '}
            <StyledLink href="#folk">traditional and folk genres</StyledLink>
          </li>
          <li>
            The use of chord based harmonies with a multitude of instruments is
            often associated with the{' '}
            <StyledLink href="#popular">popular music genre</StyledLink>
          </li>
        </NonbulletList>
        <br />
        <iframe
          allowFullScreen
          title="cats playing piano"
          src="https://giphy.com/embed/BABW5sTj8yHHq"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
        />
        <br />
        <TextBlock>
          While these methods tend to lend themselves more favourably towards
          some genres of music and not so well towards others I maintain the
          firm believe that a well-rounded musician should have experience in
          all the aforementioned methods of learning his or her instrument. The
          problems with institutionalized forms of education is the necessity to
          get a group of individuals through a series of exams under a set
          amount of time. There is little time for the teacher to be able to
          explore specific students specialised areas of expertise in either
          listening, performing or oral performances.
        </TextBlock>

        <hr />

        <h2 id="classical">The Classical Approach</h2>

        <TextBlock>
          The Classical music genre generally refers to the Western Canon i.e. a
          representational collection of works that would usually sit
          comfortable in a concert hall. Works by Bach, Mozart, Handel, Haydn
          and Beethoven are but a few examples of the kinds of artists we may
          find within this genre.
        </TextBlock>

        <TextBlock>
          The main method that most teachers employ towards teaching their
          students these works is through the teaching of sight reading. First a
          teacher would familiarize their students with the concept of rhythm
          and pitch. Rhythm is usually introduced with the aid of a metronome
          that would accompany the student during performance. Once familiar
          with the rhythmic aspects of a work the idea of pitch is introduce to
          the student primarily through the use of a Stave. The Stave refers to
          the five lines drawn horizontally on a score. Usually acronyms are
          utilized to make the notes easier to remember. The lines as seen in
          the diagram below represent the notes EGBDF, one popular method used
          to familiarize students with this is the phrase ‘Every Good Boy
          Deserves Fruit’. When learning the note values between the lines the
          word FACE is used to further aid the students memory of the note
          names.
        </TextBlock>

        <TextBlock>
          A series of grade examinations are available to students undergoing
          such a rigorous method of learning an instrument. These tests examine
          their practical ability, as well as their aural and theoretical
          understanding of the music they are performing.
        </TextBlock>
        <br />
        <iframe
          allowFullScreen
          title="2set violin"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QkklAQLhnQY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <TextBlock />
        <br />
        <br />
        <hr />

        <h2 id="folk">The Folk/Traditional Approach</h2>

        <TextBlock>
          Due to the nature of the oral transmissions of traditional music in
          Ireland most tunes would be learned off by listening and repeating.
          Rhythmic patterns i.e. Jigs, Reels, Airs, Hornpipes help the
          traditional musicians keep a steady rhythmic framework for the works
          they are performing, but across different locations alterations in the
          melodies are common especially through the use of ornamentation. When
          the tunes are written down it is usually in an alphabetic style rather
          than the more concise classical style using stave notation. It is not
          uncommon now however to find a copy of Sharon Shannon or the Dubliners
          in a manuscript stave form.
        </TextBlock>

        <TextBlock>
          Outside of the Irish tradition other cultures such as those in Africa
          and South Asia have no legacy of stave music in their history and as
          such they have no reliance on such detailed forms of musical records.
          As a result their lessons are often given in groups using repeated
          rhythmic patterns usually outlined by a form of percussive drum. Again
          this form of musical transmission is all oral/aural. In some contexts
          the music in these cultures fulfills a ceremonial or religious ritual
          purpose and as such the musicians are regarded with different levels
          of respect. This is highly contrasting towards the Irish tradition
          which is primarily utilised for entertainment purposes, or in some
          cases for cultural preservation i.e. in Gaeltacht regions.
        </TextBlock>
        <br />
        <iframe
          allowFullScreen
          title="Swallowtail Jig"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2ZxAVUsuE4Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <TextBlock />
        <br />
        <br />
        <hr />

        <h2 id="popular">The Popular Approach</h2>

        <TextBlock>
          Popular music has always varied from year to year and decade to
          decade. When considering the methods utilized by musicians today to
          learn new popular music TABS and basic Chordal knowledge are
          frequently used. With the development of the Internet into most homes
          across Ireland nearly everybody can obtain access to guitar TABS.
          Unlike the stave music TABS feature only 6 lines representing the
          strings of the guitar (or 4 in the case of bass tabs) and numbers
          representing which fret and strings to cover. The image below shows
          the extreme contrast between the tab and stave forms of notation.
          There are other versions of TABS that outline strumming rhythms with
          the use of western notation (rhythmically anyway). It&quot;s quite
          often that you will find most popular albums that release sheet music
          to feature a PVG (piano voice guitar) format that present the music in
          stave, chordal and TAB form.
        </TextBlock>

        <TextBlock>
          Most (not all) popular hits follow a simplistic underlying harmonic
          progression. The following video presents a great example of this and
          helps to reflect the simplicity of the genre in contrast to the
          complex rhythms associated with classical works and folk tunes. For
          those curious the song uses the chord pattern: I-V-vi-IV pattern in
          the key of E Major (E-B-C#m-A)
        </TextBlock>
        <br />
        <iframe
          allowFullScreen
          title="4 Chords Song"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5pidokakU4I"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <br />
        <br />
      </Wrapper>
    );
  }
}

export default Methodology;
