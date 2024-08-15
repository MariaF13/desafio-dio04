import React from 'react';

interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ title, onClick, disabled, type }: IButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      type={type} 
      style={{
      width: '100%',
      height: '42px',
      backgroundColor: '#81259D',
      color: '#FFF',
      border: '1px solid #81259D',
      borderRadius: '21px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }}>
      {title}
    </button>
  );
};

export default Button;
