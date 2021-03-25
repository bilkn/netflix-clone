import styled from 'styled-components/macro';

export const Title = styled.p`
  color: #e5e5e5;
  font-size: 24px;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: inline;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
  ${({ margin }) => margin && `margin: ${margin}`}

    > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const SubTitle = styled.p`
  color: #fff;
  display: none;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
  user-select: none;
`;

export const Text = styled.p`
  color: #fff;
  display: none;
  font-size: 10px;
  margin-bottom: 0;
  margin-top: 5px;
  line-height: normal;
  user-select: none;
`;

export const FeatureText = styled.p`
  color: white;
  font-size: 18px;
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'bold' ? 'bold' : 'normal'};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  background: url(${({ src }) => src});
  background-color: black;
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: row;
  height: 36px;
  position: relative;

  @media (max-width: 1000px) {
    background-size: auto;
    height: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  width: 20px;
`;

export const Content = styled.div`
  line-height: normal;
  margin: 56px;
  max-width: 500px;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Meta = styled.div`
  background-color: #0000008f;
  bottom: 0;
  display: none;
  padding: 10px;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const Image = styled.img`
  border: 0;
  cursor: pointer;
  height: auto;
  margin: 0;
  max-width: 305px;
  padding: 0;
  width: 100%;
`;
