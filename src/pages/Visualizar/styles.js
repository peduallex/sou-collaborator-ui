import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h2`
  display: block;
  font-size: 1.7rem;
  margin: 5vh 0 1rem;
`;

const Subtitle = styled.h3`
  display: block;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 5vh;
`;

const Row = styled.div`
  width: ${({ width }) => width || '90%'};
  display: flex;
`;

const Col = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  padding: 8px;
  text-align: center;
  &:not(:last-of-type) {
    margin-right: 7%;
  }
`;

const Data = styled.ul`
  list-style: none;
  padding-left: 0.8rem;
`;

const Item = styled.li`
  display: flex;
  font-size: 1rem;
  color: var(--black-lighten);
  justify-content: space-between;
  font-weight: 600;
`;

const Datum = styled.span`
  font-size: 0.9em;
  color: #607989;
`;

const GroupButton = styled.div`
  margin-top: 6vh;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(Link)`
  background-color: ${props => (props.primary ? 'var(--zero)' : 'var(--red)')};
  text-decoration: none;
  border: 1px solid var(--red);
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  color: ${props => (props.primary ? 'var(--red)' : 'var(--zero)')};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }
`;

export { Title, Subtitle, Row, Col, Data, Item, Datum,GroupButton ,Button};