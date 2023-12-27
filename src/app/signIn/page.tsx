'use client';

import InputLabelItem from '@/components/signIn/InputLabelItem';
import SignInButton from '@/containers/signIn/SignInButton';
import SignInInputitemGroup from '@/containers/signIn/SignInInputitemGroup';
import { flexbox } from '@/styles/mixins/flexbox';
import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';

const SignInWrap = styled.section`
  ${flexbox('center', 'flex-start')}
  flex-direction:column;
  width: 500px;
  height: calc(100vh - 70px);
  margin: 0 auto;
`;

const SignInTitle = styled.h2`
  font-size: 32px;
  color: ${defaultTheme.color.MAIN_COLOR};
  margin-bottom: 30px;
`;

const SignIn = () => {
  return (
    <SignInWrap>
      <SignInTitle>Sign In</SignInTitle>
      <SignInInputitemGroup />
      <SignInButton />
    </SignInWrap>
  );
};

export default SignIn;
