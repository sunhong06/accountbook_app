import Button from '@/components/common/Button';
import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';

interface AuthButtonProps {
  text: string;
  onClick: any;
  disabled: boolean;
}

const StyleButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: ${defaultTheme.font.XS};
  font-weight: bold;
  color: ${defaultTheme.color.WHILE};
  background-color: ${defaultTheme.color.MAIN_COLOR};
  border-radius: 5px;
`;

const AuthButton = ({ text, onClick, disabled }: AuthButtonProps) => {
  return (
    <StyleButton disabled={disabled} onClick={onClick}>
      {text}
    </StyleButton>
  );
};
export default AuthButton;
