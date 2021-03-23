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
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
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

export const Search = styled.div`
  align-items: center;
  display: flex;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  border: 1px solid white;
  color: white;
  font-size: 14px;
  height: 30px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  transition: width 0.5s;
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0')};
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  cursor: pointer;
  height: 32px;
  width: 32px;
`;

export const Link = styled.p`
  color: white;
  cursor: pointer;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    margin-right: 27.4px;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 32px;
  width: 100px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link},${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Profile = styled.div`
  align-items: center;
  display: flex;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
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

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 22px;
  font-weight: bold;
  line-height: normal;
  margin: 0;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
