import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat`;

export const Frame = styled.div``;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 56px;
  padding: 18px 0;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background: #e50914;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: block;
  height: fit-content;
  padding: 8px 17px;
  text-decoration: none;
  width: 84px;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  margin-right: 40px;
  width: 108px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
