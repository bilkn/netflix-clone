import styled from 'styled-components/macro';

export const Container = styled.div`
  border-bottom: 8px solid #222;
  display: flex;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 815px;
  margin: auto;
  padding: 70px 45px;
`;

export const Header = styled.div`
  align-items: center;
  background: #303030;
  cursor: pointer;
  display: flex;
  font-size: 26px;
  font-weight: normal;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: 0.8rem 1.2rem;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;



export const Title = styled.h1`
  color: white;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  margin-top: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Body = styled.div`
  background: #303030;
  font-size: 18px;
  font-weight: normal;
  max-height: 1200px;
  line-height: normal;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  padding: 0.8rem 2.2rem 0.8rem 1.2rem;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3rem;
  }
`;
