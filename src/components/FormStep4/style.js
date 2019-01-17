import styled from 'styled-components';

  const IMG = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 23px;
    float: right;
    background-image: ${props => (props.add )};
    `;

  const Button = styled.button`
  background-color: ${props => (props.primary ? '#FFFFFF' : '#D13239')};
  border: 1px solid #d13239;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  color: ${props => (props.primary ? '#D13239' : '#FFFFFF')};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 0vh 0 1rem;
`;

const Subtitle = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 0 5vh;
`;


const GroupButton = styled.div`
  margin-top: 6vh;
  display: flex;
  justify-content: flex-end;
`;

const SubtitleValidacao = styled.h3`
  font-size: 0.80rem;
  text-transform: uppercase;
  margin: 0 0 5vh;
  color:#BEBEBE;
`;
export { IMG, Button,GroupButton,Container,Title,Subtitle,SubtitleValidacao };
