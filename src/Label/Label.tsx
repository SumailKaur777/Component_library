import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const StyledLabel = styled.label`
  font-weight: bold;
`;

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
