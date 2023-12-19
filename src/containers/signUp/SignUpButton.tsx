import Button from '@/components/common/Button';
import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';

const StyleSignUpButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: ${defaultTheme.color.MAIN_COLOR};
  font-size: 14px;
  font-weight: bold;
`;

const SignUpButton = () => {
  const signUpHandler = async () => {
    const res = await fetch('api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'dd',
        email: 'dd',
        password: '123123123',
        date: new Date(),
      }),
    });
  };

  return (
    <StyleSignUpButton disabled={false} onClick={signUpHandler}>
      회원가입
    </StyleSignUpButton>
  );
};
export default SignUpButton;
