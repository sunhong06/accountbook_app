import InputLabelItem from '@/components/auth/InputLabelItem';
import defaultTheme from '@/styles/theme/defaultTheme';
import { FormEvent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AuthButton from '@/components/auth/AuthButton';
import { signInObj } from '@/types/user';

const InputLabelItemWrap = styled.div`
  padding-bottom: 10px;
  width: 100%;
`;

const StyleInputLabelItem = styled(InputLabelItem)`
  margin-bottom: 20px;
  width: 100%;
  position: relative;

  label {
    color: #fff;
    display: block;
    font-size: ${defaultTheme.font.XS};
    padding-bottom: 7px;
  }
  input {
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: 40px;
    color: ${defaultTheme.color.MAIN_COLOR};
  }

  button {
    position: absolute;
    bottom: 10px;
    right: 0;
    color: ${defaultTheme.color.MAIN_COLOR};
  }
`;
const StyledLink = styled(Link)`
  display: block;
  text-align: right;
  color: ${defaultTheme.color.WHILE};
  font-size: ${defaultTheme.font.XS};
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
      <StyledLink href='/signup'>회원가입</StyledLink>
      <AuthButton disabled={false} text='로그인' onClick={signInHandler} />
    </InputLabelItemWrap>
  );
};

export default SignInFormView;
