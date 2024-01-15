'use client';

import AuthButton from '@/components/auth/AuthButton';
import Logo from '@/components/common/Logo';
import { flexbox } from '@/styles/mixins/flexbox';
import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';
import SignUpInputItemGroup from '@/containers/signUp/SignUpForm';

const SignUpWrap = styled.section`
  ${flexbox('center', 'center')}
  flex-direction:column;
  width: 350px;
  height: 100vh;
  margin: 0 auto;
`;

const SignUpTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${defaultTheme.font.XL};
  color: ${defaultTheme.color.MAIN_COLOR};
  margin-bottom: 10px;
`;

const LogoText = styled.span`
  margin-top: 10px;
  font-size: ${defaultTheme.font.XL};
  color: ${defaultTheme.color.WHILE};
  font-weight: bold;
`;
const LogoText2 = styled.span`
  margin-top: 5px;
  font-size: ${defaultTheme.font.L};
  color: ${defaultTheme.color.WHILE};
`;

const SignUp = () => {
  return (
    <SignUpWrap>
      <SignUpTitle>
        <Logo width={100} height={100} />
        <LogoText>가계부</LogoText>
        <LogoText2>account book</LogoText2>
      </SignUpTitle>
      <SignUpInputItemGroup />
    </SignUpWrap>
  );
};

export default SignUp;
