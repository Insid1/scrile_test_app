import React from 'react';
import * as S from './button.styled';

function Button({ children, ...rest } : React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <S.Button {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
