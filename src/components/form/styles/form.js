import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 100px;
  max-width: 450px;
  min-height: 660px;
  padding: 60px 68px 40px;
  width: 100%;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  margin: 0 0 16px;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  color: #8c8c8c;
  font-size: 13px;
  margin-top: 10px;
  line-height: normal;
`;

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border: 0;
  border-radius: 4px;
  color: #fff;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  padding: 5px 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;

  &:disabled {
    opacity: 0.5;
  }
`;
