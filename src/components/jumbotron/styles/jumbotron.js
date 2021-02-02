import styled from 'styled-components/macro';

export const Item = styled.div`
border-bottom: 8px solid #222;
color: white;
display: flex;
  padding: 50px 5%;
  overflow: hidden;
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  margin: auto;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;
export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    padding: 0 45px;
    text-align: center;
    width: 100%;
    
  }
`;

export const Title = styled.h1`
font-size: 50px;
line-height: 1.1;
margin-bottom: 8px;

@media (max-width: 600px) {
  font-size: 35px;
}
`;

export const SubTitle = styled.h2`
font-size: 26px;
font-weight: normal;
line-height: normal;

@media (max-width: 600px) {
  font-size: 18px;
}
`;
export const Image = styled.img`
height: auto;
max-width: 100%;
`;
