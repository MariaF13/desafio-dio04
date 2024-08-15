import styled from 'styled-components';

interface ButtonContainerProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    &:disabled {
        background-color: #D3D3D3;
        border: 1px solid #A9A9A9;
        cursor: not-allowed;
    }
`;
