'use client';

import Logo from '@/components/common/Logo';
import SignInForm from '@/containers/signIn/SignInForm';
import { flexbox } from '@/styles/mixins/flexbox';
import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';

const SignInWrap = styled.section`
  ${flexbox('center', 'center')}

  flex-direction:column;
  width: 350px;
  height: 100vh;
  margin: 0 auto;
`;

const SignInTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  font-size: ${defaultTheme.font.XL};
  color: ${defaultTheme.color.MAIN_COLOR};
`;

const LogoText = styled.span`
  margin-top: 10px;
  font-size: ${defaultTheme.font.XL};
  font-weight: bold;
  color: ${defaultTheme.color.WHILE};
`;
const LogoText2 = styled.span`
  margin-top: 5px;
  font-size: ${defaultTheme.font.L};
  color: ${defaultTheme.color.WHILE};
`;

const SignIn = () => {
  return (
    <SignInWrap>
      <SignInTitle>
        <Logo width={100} height={100} />
        <LogoText>가계부</LogoText>
        <LogoText2>account book</LogoText2>
      </SignInTitle>
      <SignInForm />
    </SignInWrap>
  );
};

export default SignIn;
