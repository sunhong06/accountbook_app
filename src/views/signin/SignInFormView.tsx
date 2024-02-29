'use client';

import InputLabelItem from '@/components/auth/InputLabelItem';
import defaultTheme from '@/styles/theme/defaultTheme';
import { FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AuthButton from '@/components/auth/AuthButton';
import { signInObj } from '@/types/user';

const InputLabelItemWrap = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

const StyleInputLabelItem = styled(InputLabelItem)`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  label {
    display: block;
    padding-bottom: 7px;
    font-size: ${defaultTheme.font.XS};
    color: #fff;
  }

  input {
    width: 100%;
    height: 40px;
    color: ${defaultTheme.color.MAIN_COLOR};
    border-bottom: 1px solid #ddd;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 10px;
    color: ${defaultTheme.color.MAIN_COLOR};
  }
`;
const StyledLink = styled(Link)`
  display: block;
  margin: 5px 0;
  font-size: ${defaultTheme.font.XS};
  color: ${defaultTheme.color.WHILE};
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

interface SignInFormViewProps {
  idInputChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
  passwordInputChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
  inputValue: signInObj;
  signInHandler: () => void;
}
const SignInFormView = ({
  idInputChangeHandler,
  passwordInputChangeHandler,
  inputValue,
  signInHandler,
}: SignInFormViewProps) => {
  return (
    <InputLabelItemWrap>
      <StyleInputLabelItem label='아이디' value={inputValue.id} onChangeHandler={idInputChangeHandler} />
      <StyleInputLabelItem
        label='비밀번호'
        type='password'
        value={inputValue.password}
        onChangeHandler={passwordInputChangeHandler}
      />
      <StyledLink href='/signUp'>회원가입</StyledLink>
      <AuthButton disabled={false} text='로그인' onClick={signInHandler} />
    </InputLabelItemWrap>
  );
};

export default SignInFormView;
