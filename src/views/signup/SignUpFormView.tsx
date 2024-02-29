'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import InputLabelItem from '@/components/auth/InputLabelItem';
import defaultTheme from '@/styles/theme/defaultTheme';
import { FormEvent } from 'react';
import styled from 'styled-components';
import AuthButton from '@/components/auth/AuthButton';
import { signUpObj } from '@/types/user';
import { flagObj } from '@/types/auth';
import AuthTimer from '@/components/auth/AuthTimer';

const InputLabelItemWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const StyleInputLabelItem = styled(InputLabelItem)`
  position: relative;
  width: 100%;
  margin-bottom: 15px;

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
    right: 10px;
    bottom: 10px;
    font-size: ${defaultTheme.font.XS};
    color: ${defaultTheme.color.MAIN_BG};
  }
`;
const ErrorMsg = styled.div`
  margin-bottom: 7.5px;
  font-size: ${defaultTheme.font.XS};
`;

const AuthTimerSpan = styled.span`
  position: absolute;
  right: 100px;
  bottom: 10px;
  font-size: 14px;
  color: red;
`;

const StyleEmailAuthNumberItem = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;

  input {
    width: 100%;
    height: 40px;
    color: ${defaultTheme.color.MAIN_COLOR};
    border-bottom: 1px solid #ddd;
  }

  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: ${defaultTheme.font.XS};
    color: ${defaultTheme.color.MAIN_BG};

    &:nth-of-type(2) {
      right: 50px;
      color: ${defaultTheme.color.MAIN_COLOR};
      text-decoration: underline;
    }
  }
`;
interface SignUpInputItemGroupViewProps {
  resendAuthNumber: () => void;
  changeAuthNumber: (e: FormEvent<HTMLInputElement>) => void;
  checkAuthNumber: () => void;
  inputValue: signUpObj;
  authNumber: string;
  signUpHandler: () => void;
  checkIdHandler: () => void;
  idInputChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
  passwordInputChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
  passwordConfirmInputChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
  emailInputChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
  sendAuthNumber: () => void;
  flag: flagObj;
  Exp: signUpObj;
  isValidation: boolean;
  setSeconds: any;
  setMinutes: any;
  seconds: number;
  minutes: number;
}

const SignUpInputFormView = ({
  idInputChangeHandler,
  passwordInputChangeHandler,
  passwordConfirmInputChangeHandler,
  emailInputChangeHandler,
  checkIdHandler,
  authNumber,
  signUpHandler,
  inputValue,
  checkAuthNumber,
  changeAuthNumber,
  resendAuthNumber,
  sendAuthNumber,
  flag,
  isValidation,
  Exp,
  setSeconds,
  setMinutes,
  seconds,
  minutes,
}: SignUpInputItemGroupViewProps) => {
  return (
    <InputLabelItemWrap>
      <StyleInputLabelItem
        label='아이디'
        value={inputValue.id}
        onChangeHandler={idInputChangeHandler}
        buttonComponents={<button onClick={checkIdHandler}>중복확인</button>}
      />
      {isValidation && <ErrorMsg>{Exp.id}</ErrorMsg>}
      <StyleInputLabelItem
        label='비밀번호'
        type='password'
        value={inputValue.password}
        onChangeHandler={passwordInputChangeHandler}
      />
      {isValidation && <ErrorMsg>{Exp.password}</ErrorMsg>}
      <StyleInputLabelItem
        label='비밀번호 확인'
        type='password'
        value={inputValue.passwordConfirm}
        onChangeHandler={passwordConfirmInputChangeHandler}
      />
      {isValidation && <ErrorMsg>{Exp.passwordConfirm}</ErrorMsg>}
      <StyleInputLabelItem
        label='이메일'
        value={inputValue.email}
        onChangeHandler={emailInputChangeHandler}
        buttonComponents={
          <>
            <Button disabled={flag.isAuthNumberComplete ? false : true} onClick={sendAuthNumber}>
              인증번호 전송
            </Button>
          </>
        }
      />
      {isValidation && <ErrorMsg>{Exp.email}</ErrorMsg>}
      {!flag.isShowAuthNumberInput && (
        <>
          <StyleEmailAuthNumberItem>
            <Input maxLength={6} value={authNumber} onChange={changeAuthNumber} />
            <AuthTimerSpan>
              <AuthTimer setSeconds={setSeconds} setMinutes={setMinutes} seconds={seconds} minutes={minutes} />
            </AuthTimerSpan>
            <Button disabled={flag.isAuthNumberComplete ? false : true} onClick={checkAuthNumber}>
              확인
            </Button>
            <Button disabled={flag.isAuthNumberComplete ? false : true} onClick={resendAuthNumber}>
              재요청
            </Button>
          </StyleEmailAuthNumberItem>
        </>
      )}
      <AuthButton text='회원가입' onClick={signUpHandler} disabled={false} />
    </InputLabelItemWrap>
  );
};

export default SignUpInputFormView;
