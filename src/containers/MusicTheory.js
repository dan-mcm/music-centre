import React, { Component } from "react";
import { Wrapper, NonbulletList, TableCentered, TextBlock, SourceBlock, StandardImage, StyledLink } from "../utils/styles.js"

// image imports
import accidentals from "../images/musictheory/accidentals.png";
import chordwheel from "../images/musictheory/chord-wheel.jpg";
import commontime from "../images/musictheory/commontime.jpg";
import compounds from "../images/musictheory/compound-signatures.jpg";
import compoundsimple from "../images/musictheory/compound+simple.jpg";
import emphasis22 from "../images/musictheory/2-2 Emphasis.jpg";
import emphasis24 from "../images/musictheory/2-4 Emphasis.jpg";
import emphasis28 from "../images/musictheory/2-8 Emphasis.jpg";
import emphasis34 from "../images/musictheory/3-4 Emphasis.jpg";
import emphasis44 from "../images/musictheory/4-4 Emphasis.jpg";
import intervals from "../images/musictheory/intervals.png";
import keysignatures from "../images/musictheory/keysignatures.gif";
import keyboardstave from "../images/musictheory/keyboard-stave.jpg";
import modes8 from "../images/musictheory/8modes.png";
import rhythm from "../images/musictheory/rhythm.gif";
import rhythmhierarchy from "../images/musictheory/rhythm-hierarchy.jpg";
import staveline from "../images/musictheory/stave-line.jpg";
import stavespace from "../images/musictheory/stave-space.jpg";
import treblebass from "../images/musictheory/treblebass.jpg";
import vocalrythm from "../images/musictheory/vocal-rhythm.jpg";

class MusicTheory extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Piano as a Reference Point</h2>

        <TextBlock>Of all the instrument families keyboards lend themselves best to provide an understanding of music theory due to the visual nature of the different notes of the scales they use. When considering music theory as a whole the basics lie with understanding how to read sheet music. The following page aims to examine the basic aspects of music theory from sight-reading to scale structures. Hopefully it will be of use to refresh your memory on the basics, or even to teach people who have never come across this kind of theory before.</TextBlock>

        <TextBlock>The topics included on this page cover:</TextBlock>
        <NonbulletList>
            <li><StyledLink href="#pitch">Reading Pitch</StyledLink></li>
            <li><StyledLink href="#accidentals">Reading Accidentals</StyledLink></li>
            <li><StyledLink href="#key-signatures">Key Signatures</StyledLink></li>
            <li><StyledLink href="#reading-rhythm">Reading Rhythm</StyledLink></li>
            <li><StyledLink href="#time-signatures">Time Signatures</StyledLink></li>
            <li><StyledLink href="#scales">Scales</StyledLink></li>
            <li><StyledLink href="#intervals">Intervals</StyledLink></li>
            <li><StyledLink href="#making-chords">Chords</StyledLink></li>
        </NonbulletList>
        <br />
        <hr />

        <h2 id="pitch">Pitch</h2>

        <TextBlock>In order to be play instruments from sight-reading it is important to become familiar with the stave. The middle C key represents the start of the middle octave of a keyboard/piano. Keyboards (and some Pianos) come in different key sizes so this position may shift depending on the instrument, however it should always be at the same pitch as C4 (261.626hz).</TextBlock>

        <TextBlock>The following diagram represents the exact location of the keyboard notes in correspondence with their stave notation (note this applies to the white keys only).</TextBlock>
        <br/>
        <StandardImage src={keyboardstave} alt="Keyboard stave"/>
        <br/>
        <SourceBlock>Source: http://www.church-musician-jobs.com/keyboard-music.html</SourceBlock>
        <br/>
        <TextBlock>A labelling of the lines on both the Treble and Bass Clef are provided here. In order to memorise them a series of word association is often used. To remember the notes associated with the treble clefs ledger lines the phrase ‘Every Good Boy Deserves Fruit’ is often used. To remember the spaces between the ledger lines FACE is often used. To memorise the bass clef ledger lines the phrase ‘Good Boys Deserve Fruit Always’ is often used, and to memorise the spaces the phrase ‘All Cows Eat Grass’ is often used.</TextBlock>
        <br/>
        <StandardImage src={staveline} alt="Stave lines"/>
        <br/>
        <StandardImage src={stavespace} alt="Stave spaces"/>
        <br/>
        <SourceBlock>Source: http://donrathjr.com/note-identification-music-theory-part-11/</SourceBlock>
        <br/>
        <TextBlock>In order to notate notes that exceed the range covered by the treble and bass clef stave lines further ledger lines are often used. A sample of these extra ledger lines is notated below.</TextBlock>
        <br/>
        <StandardImage src={treblebass} alt="Ledger lines"/>
        <br/>
        <SourceBlock>Source: http://donrathjr.com/note-identification-music-theory-part-11/</SourceBlock>
        <br />
        <hr />

        <h2 id="accidentals">Accidentals</h2>

        <TextBlock>Outside of the basic notes depicted above, there are the issue of the other 5 notes on the keyboard (the black notes). In order to indicate to play these notes a series of accidentals are used. (These notes are only referred to as accidentals when they do not conform to the key signature) A sharp note is considered to be the black note to the right of the sharpened note. So for e.g. C# is the black note to the right of C, F# is the black note right of F etc. Flat notes are considered to be to the left of the note so Eb is to the black note to the left of E and Bb is the note to the left of B (double sharps and flats are two semitones to the left or right of the note, so Dx would be E and Dbb would be C).It’s important to note that C# and Db are on the same key of a modern piano/keyboard and are thus considered ‘enharmonically’ equivalent. However in the case of key signatures it is important for us to distinguish between when to use flats and when to use sharps – just as it’s important for us to know when to use upper case and lower letters when writing.</TextBlock>

        <TextBlock>Accidental Symbols:</TextBlock>
        <br/>
        <StandardImage src={accidentals} alt="Accidentals"/>
        <br/>
        <SourceBlock>Source: http://tlt.its.psu.edu/mto/music/keyboard.html</SourceBlock>
        <br/>
        <TextBlock>Also note that on a modern piano/keyboard Fb = E, Cb = B, E# = F, B# = C</TextBlock>

        <hr />

        <h2 id="key-signatures">Key Signatures</h2>
        <TextBlock>A majority of songs don’t stick to using pianos white keys and as a result of this they would have to repeatedly use accidentals over and over. In order to avoid this dilemma a series of key signatures was developed. These key signatures appear at the beginning of a piece after the clef and before the time signature. Any notes marked as sharp or flat in this space must continuously be played sharp or flat throughout the song unless otherwise indicated by an accidental. If a natural version of the note is to be played as opposed to its sharpened or flattened version as indicated by the key signature a natural sign may be used. A list of all the key signatures is provided below.</TextBlock>
        <br/>
        <StandardImage src={keysignatures} alt="Key signatures"/>
        <br/>
        <SourceBlock>Source: http://music.thefxcode.com/0009.htm</SourceBlock>

        <hr />

        <h2 id="reading-rhythm">Reading Rhythm</h2>
        <TextBlock>In order to play music it is important to be able to read note rhythm values as well as pitch. Below is a list of different note/rest names. The note values are depicted on the left side of the Sign column, and the rest symbols are depicted on the right side of the Sign column. In the case of dotted notes, you add half the notes value onto itself. So a dotted minim would be worth 3 beats, a dotted crotchet would be worth a crotchet+quaver beat etc.</TextBlock>

        <br/>
        <StandardImage src={rhythm} alt="Rhythms"/>
        <br/>
        <SourceBlock>Source: http://teacher-monica.blogspot.ie/2011/01/year-3-music-whats-in-rhythm.html</SourceBlock>

        <TextBlock>Semibreves last for a period of 4 beats, minims last 2 beats, crotchets last 1 beat, quavers last half a beat and semiquavers last a quarter of a beat. The next diagram shows a breakdown of all the notes into their subsequent parts.</TextBlock>
        <br/>
        <StandardImage src={rhythmhierarchy} alt="Rhythm hierarchy"/>
        <br/>
        <SourceBlock>Source: http://www.dummies.com/how-to/content/how-to-read-music-note-values.navId-407233.html</SourceBlock>

        <TextBlock>A vocal guide is often used to help familiarise students with the variety of beats. This guide has been provided below</TextBlock>
        <br/>
        <StandardImage src={vocalrythm} alt="Vocal rhythms"/>
        <br/>
        <SourceBlock>Source: http://www.soundpiper.com/elements/rhythm.htm</SourceBlock>
        <br />
        <hr />

        <h2 id="time-signatures">Time Signatures</h2>
        <TextBlock>Sheet music is divided up into a series of different bars. The amount and type of beats per bar is determined by the time signature. The metre is usually found next to the clef at the start of a piece of music, it may also change throughout a song so keep an eye on it. The following image is an example of what a 4/4 or common time metre looks like. Due to the frequency of use of 4/4 time it is sometimes written as just a C reflecting common time. 2/2 timing often referred to as cut common time is sometimes depicted by a C with a line through it.</TextBlock>
        <br/>
        <StandardImage src={commontime} alt="Common Time"/>
        <br/>
        <SourceBlock>Source:  http://codamusictheory.com/meter1.htm </SourceBlock>

        <TextBlock>The numerator (top number) reflects how many beats there are per measure (bar). The denominator (bottom number) tells us what note values the beats get. In the case above it is saying that there are 4 crotchet (quarter note) beats in a bar. A 6/8 time signature would reflect that there are 6 quaver (eight note) beats per bar. These time signatures also tell us where the emphasis of a beat is. Some examples of these implied emphasis’ include:</TextBlock>
        <br/>
        <StandardImage src={emphasis22} alt="2-2"/>
        <StandardImage src={emphasis24} alt="2-4"/>
        <StandardImage src={emphasis28} alt="2-8"/>
        <StandardImage src={emphasis34} alt="3-4"/>
        <StandardImage src={emphasis44} alt="4-4"/>
        <br/>
        <SourceBlock>Source: http://www.making-music.com/time-signatures-2.html</SourceBlock>
        <br/>
        <TextBlock>All these time signatures are in Simple time. However there are a series of Compound time signatures which have a numerator that is divisible by three. For example:</TextBlock>
        <br/>
        <StandardImage src={compounds} alt="Compound Meter"/>
        <br/>
        <SourceBlock>Source: http://www.making-music.com/time-signatures-2.html</SourceBlock>

        <TextBlock>In simple time, the rhythm or pulse is essentially the upper figure. So in 2/4 time there are two pulses to the bar, in 3/4 there are three pulses and in 4/4 there are four. In compound time, divide the upper number by three to find the main beat. For example:</TextBlock>
        <br/>
        <StandardImage src={compoundsimple} alt="Simple Compound"/>
        <br/>
        <SourceBlock>Examples taken from: http://www.making-music.com/time-signatures-2.html</SourceBlock>

        <hr />

        <h2 id="scales">Scales</h2>
        <TextBlock>The basic foundations of any form of musical theory rely on an understanding of scales. Scales essentially function as the underlying 'alphabetical' structure of music. The easiest way to understand the formation of a scale is to examine the keys as they appear on a piano/keyboard. Specifically the collection of white notes only from C up to C which form the scale of C major. The scale of C consists of the notes C-D-E-F-G-A-B and a repetition of the C note at a higher octave.</TextBlock>

        <TextBlock>The 'major' aspect of the scale is as a result of the tonal space between each of the scale degrees i.e. C-D is a tone (which is 2 semitones), D-E is a tone, E-F is a semitone, F-G is a tone, G-A is a tone, A-B is a tone. From this we can see that a major scale consists of the following pattern of spatial relationships: T-T-S-T-T-T-S. An easier way to remember this pattern is to divide it into 3 parts, T-T-S; T; T-T-S. In order to form any major scale, you simply start on the note (e.g. G) and apply the series of tone and semitone gaps (G-A-B-C-D-E-F#-G).</TextBlock>

        <TextBlock>
        The 'minor' aspect of scales is an alteration of this sequence of tonal spaces. There are three main types of minor scale (unlike the singular type of major scale). The most commonly used are the Melodic and Harmonic however a Natural Minor also exists. The Natural Minor scale follows the structure: T-S-T-T-S-T-T e.g. in the scale of A Natural Minor: A-B-C-D-E-F-G-A. The Harmonic Minor scale uses the Natural Minor as a basis and raises the 7th scale degree by a semitone. In the case of A Harmonic Minor the scale would be A-B-C-D-E-F-G#-A. All the scales mentioned to this point consists of the same notes ascending and descending, however the Melodic Minor scale breaks this conformity. Working from the Natural Minor scale, the ascending version of the Melodic minor consists of a raise 6th and 7th degree, whereas the descending version of the scale consists of a flattened 6th and 7th degree. A Melodic Minor (ascending) consists of the notes A-B-C-D-E-F#-G#-A, and the descending consists of A-G-F-E-D-C-B-A.</TextBlock>

        <TextBlock>The major and minor scales are those most frequently used to date, however they are derivative of older modal structures. The image below demonstrates the original types of modal structures used and explores their relationship to modern scales. Note that the Ionian is the equivalent to our Major scale and the Aeolian is the equivalent to our Natural Minor scale.</TextBlock>
        <br/>
        <TableCentered>
          <tr><th>Mode</th><th>Tonic relative to major scale</th><th>Interval sequence</th><th>Example</th></tr>
          <tr><td>Ionian</td><td>I</td><td>T-T-s-T-T-T-s</td><td>C-D-E-F-G-A-B-C</td></tr>
          <tr><td>Dorian</td><td>II</td><td>	T-s-T-T-T-s-T</td><td>D-E-F-G-A-B-C-D</td></tr>
          <tr><td>Phrygian</td><td>III</td><td>s-T-T-T-s-T-T</td><td>E-F-G-A-B-C-D-E</td></tr>
          <tr><td>Lydian</td><td>IV</td><td>T-T-T-s-T-T-s</td><td>F-G-A-B-C-D-E-F</td></tr>
          <tr><td>Mixolydian</td><td>V</td><td>T-T-s-T-T-s-T</td><td>G-A-B-C-D-E-F-G</td></tr>
          <tr><td>Aeolian</td><td>VI</td><td>T-s-T-T-s-T-T</td><td>A-B-C-D-E-F-G-A</td></tr>
          <tr><td>Locrian</td><td>VI</td><td>s-T-T-s-T-T-T</td><td>B-C-D-E-F-G-A-B</td></tr>
        </TableCentered>

        <br/>

        <StandardImage src={modes8} alt="Modes"/>
        <br/>
        <SourceBlock>Source: http://en.wikipedia.org/wiki/Mode_(music)</SourceBlock>
        <hr />

        <h2 id="intervals">Intervals</h2>

        <TextBlock>When examining the relationships between two separate notes we first look to our scale. For the purposes of explanation we shall stick with the key of C major which contains no sharps or flats. The following diagram is a breakdown of some of the basic intervals within the scale.</TextBlock>
        <br/>
        <StandardImage src={intervals} alt="intervals"/>
        <br/>
        <SourceBlock>Source: http://academy.musiclassroom.com/en/free-lessons/jazz-piano/beginner</SourceBlock>

        <TextBlock>The unison Interval refers to a note being played over itself – in the case of C major middle C being played by 2 separate voices/parts/instruments would be an example of a unison interval. The minor second interval consists of a semitone difference between the notes. The major second interval consists of a tone difference between the notes. The minor third consists of 3 semitones between the first note and second, and the major third consists of 4 semitones between the first and second note. Perfect 4ths and 5ths are at a distance of 5 and 6 semitones apart. And so on for major and minor 6ths and 7ths. The important thing to note with these intervals is that all of the pitches are compared to the tonic or first note of the scale underlying a songs key signature.</TextBlock>

        <TextBlock>Pitch is relative in terms of the key it is in. If we were to transpose a song in the key of C major to the key of G major we’re altering the pitch of the song but maintaining the same intervallic content. On top of these, in order to structure chords we need to be able to use major and minor thirds, as well as perfect 5ths and other intervals.</TextBlock>

        <hr />

        <h2 id="making-chords">How to Make Chords</h2>
        <TextBlock>With the basic knowledge of scale structures any chord can be formed. Examine the following table:</TextBlock>
        <br/>
        <TableCentered>
          <tr><td>G</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr>
          <tr><td>E</td><td>F</td><td>G</td><td>A</td><td>B</td><td>C</td><td>D</td></tr>
          <tr><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>A</td><td>B</td></tr>
          <tr><td>I</td><td>ii</td><td>iii</td><td>IV</td><td>V</td><td>vi</td><td>vii</td></tr>
          <tr><td>C Major</td><td>D Minor</td><td>E Minor</td><td>F Major</td><td>G Major</td><td>A Minor</td><td>B Minor&deg;</td></tr>
        </TableCentered>
        <br/>
        <TextBlock>This table outlines all the basic triads suitable for use in a C major scale. The chords are based on all the notes of the C major scale (C-D-E-F-G-A-B-C). In order to construct the triads on each of the scale degrees, a series of tonal relationships need to be met. These chords all feature an interval of a third (major or minor) and a perfect fifth. The third is what defines the chord as major or minor. The table above is the guideline used for leaving certificate students doing composition work. In reality chords ii, iii, vi and vii can use both minor or major versions of the chord, the same goes for chords I, IV and V. When trying to understand the relationship between chords the cycle of fifths and fourths is important to consider. Modulations occur in compositions from one key signature to the next, whether it be major to minor, major to major, minor to minor or modal or modal. The closer the keys are related to each other the more harmonically clear they will sound.</TextBlock>

        <TextBlock>Outside of the standard Major and Minor chords diminished (symbolized by °), augmented (symbolized by +), 7ths and other compound chords exist. Diminished chords contain an altered 5th of a major or minor chord which has been flattened e.g. C° features the notes C D and F#. similarly C+ features the notes C E and G#. In the case of compound chords, the original triad is still evident, but an extra scale degree is added (traditionally that scale degree is considered minor and not major). For example C7 contains the notes C-E-G-Bb, whereby Bb is a minor 7th above C. Cmaj7 on the other hand one consist of the notes C-E-G-B. In the case of 11th and 12th chords we would add F and G (as the 11th and 12th scale degrees of C are the same as the 4th and 5th scale degrees). </TextBlock>

        <TextBlock>The cycle below read clockwise consists of the cycle of fifths and read anticlockwise consists of the cycle of fourths. generally speaking the keys located beside each other are the best to modulate to. However other types of modulation are also available for use. Modal swaps whereby you shift from your current key to its parallel major (or minor) i.e. in the key of C major modulating to C minor or visa versa. When in a major key the relative minor (chord vi) is also a good choice for modulation due to their sharing of the same key signature. When in a minor key, the III chord is the relative major and is also good to modulate to. </TextBlock>
        <br/>
        <StandardImage src={chordwheel} alt="Cycle of Fifths"/>
        <br/>
        <SourceBlock>Source: http://gorehound1313.wordpress.com/10-things-i-wish-my-guitar-teacher-told-me-on-day-one/common-beginner-mistakes/circle-of-fifths-for-guitarists/</SourceBlock>

        <TextBlock>No matter what the key signature is, there are a series of Cadences that exsist which help make a phrase of music sound 'finalised'. Those Cadences are as follows:</TextBlock>

        <NonbulletList>
          <li>Perfect Cadence: V-I </li>
          <li>Plagal Cadence: IV-I</li>
          <li>Imperfect Cadence: I/ii/IV-V</li>
          <li>Interrupted Cadence: V-vi</li>
        </NonbulletList>

        <TextBlock>A perfect cadence can be further broken into a Perfect Authentic Cadence (PAC) or Imperfect Authentic Cadence (IAC). A PAC maintains that the chords must be in root position traditionally with the soprano voice line move from scale degrees 3-2-1</TextBlock>

      </Wrapper>
    );
  }
}

export default MusicTheory;
