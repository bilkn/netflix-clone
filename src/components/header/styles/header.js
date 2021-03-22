import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})   
      top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

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

export const Group = styled.div`
  align-items: center;
  display: flex;
`

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

export const Feature = styled(Container)`
  align-items: normal;
  flex-direction: column;
  padding: 150px 0 500px 0;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
export const Link = styled.p`
  color: white;
  cursor: pointer;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 22px;
  font-weight: bold;
  line-height: normal;
  margin: 0;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
