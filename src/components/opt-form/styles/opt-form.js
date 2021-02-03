import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
`;
export const Input = styled.input`
  border: 0;
  box-sizing: border-box;
  height: 70px;
  max-width: 450px;
  padding: 10px;
  width: 100%;
`;
export const Button = styled.button`
  align-items: center;
  background: #e50914;
  border: 0;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 26px;
  height: 70px;
  padding: 0 32px;
  text-transform: uppercase;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    margin-top: 20px;
  }

  img {
    filter: brightness(0) invert(1);
    margin-left: 10px;
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;
export const Text = styled.p`
  color: white;
  font-size: 19.2px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
