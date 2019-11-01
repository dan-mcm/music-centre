import styled from "styled-components";

export const CenterBullets = styled.ul`
  margin: auto;
  padding: auto;
  text-align: left;
  list-style-position: inside;
  display:inline-block;
`;

export const Flip90Image = styled.img`
  max-width: 500px;
  max-height: 500px;
  -webkit-transform: rotate(270deg);
 -moz-transform: rotate(270deg);
 -o-transform: rotate(270deg);
 -ms-transform: rotate(270deg);
 transform: rotate(270deg);
 border-radius: 50%;
 border: 1px solid black;
 box-shadow: 10px 10px 5px grey;
 padding: 10px;
 border: 1px solid black;
 margin: 10px
`

export const FlippedImage = styled.img`
  max-width: 500px;
  max-height: 500px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  box-shadow: -10px -10px 5px grey;
  padding: 10px;
  border: 1px solid black;
  margin: 10px
`

export const NonbulletList = styled.ul`
  list-style: none
  margin: 0
  padding: 0
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: DarkRed;
  &:hover {
    text-decoration: underline;
  }
`

export const TableCentered = styled.table`
  text-align: center;
  border-collapse: collapse;
  margin: auto;
  box-shadow: 10px 10px 5px grey;
  th {
    border: 2px solid black;
    padding: 5px;
  }
  td {
    border: 2px solid black;
    font-weight: bold;
    padding: 5px;
  }
`;

export const TextBlock = styled.p`
  text-align: left;
  display: inline-block;
  padding-left: 2.5%;
  padding-right: 2.5%;
`

export const SourceBlock = styled.p`
  text-align: left;
  display: inline-block;
  padding-left: 2.5%;
  padding-right: 2.5%;
  font-size: 12px;
  color: DarkRed;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  min-width: 600px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  line-height: 1.6;
`

export const StandardImage = styled.img`
  max-width: 500px;
  max-height: 500px;
`
