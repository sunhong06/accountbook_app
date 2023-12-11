import { ReactNode } from 'react';
import styled from 'styled-components';

const StyleButton = styled.button``;

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
};

const Button = ({ type = 'button', disabled, children, ...buttonProps }: Props) => {
  return (
    <StyleButton type={type} className='button' disabled={disabled} {...buttonProps}>
      {children}
    </StyleButton>
  );
};
export default Button;
