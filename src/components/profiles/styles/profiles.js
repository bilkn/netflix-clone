import styled from 'styled-components/macro';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
export const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export const Picture = styled.img`
  border: 3px solid black;
  cursor: pointer;
  height: auto;
  max-width: 150px;
  width: 100%;
`;

export const Name = styled.p`
  color: #808080;
  font-size: 16px;
  text-overflow: ellipsis;

  &:hover {
    color: #e5e5e5;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  list-style-type: none;
  max-height: 200px;
  margin-right: 30px;
  max-width: 200px;
  text-align: center;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    color: white;
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;



