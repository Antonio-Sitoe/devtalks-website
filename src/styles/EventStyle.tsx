import styled from 'styled-components';
import { animeLeft } from './GlobalStyle';
type Toogle = {
  show: Boolean;
};

export const EventContainer = styled.div`
  animation: 0.6s ${animeLeft};
  color: white;
  max-width: 700px;
  width: 100%;
  margin: 1rem auto;
  padding: 0 0.6rem;
  margin-bottom: 3rem;
`;

export const NavEventstyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 3rem 0;
  li {
    &::after {
      content: '';
      margin: 0.6rem 0;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      margin: 0 auto;
      display: block;
      background: #2d2d2e;
    }
  }
`;

export const Btn = styled.button<Toogle>`
  padding: 1.2rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.show ? '#60ba1e' : '#2d2d2e')};
  color: white;
  cursor: pointer;
  margin: 0.6rem 0;
`;
