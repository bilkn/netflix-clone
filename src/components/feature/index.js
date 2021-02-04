import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';
function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Feature;

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title restProps={restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
