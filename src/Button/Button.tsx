import React from 'react';
import styled from 'styled-components';

// Define styled component for the button
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.disabled ? '#ccc' : '#007bff'};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.disabled ? '#ccc' : '#0056b3'};
  }
`;

// Define types for props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// Button component
const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
