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
  margin-bottom: 30px;
  width: 100%;
`;

const StyleInputLabelItem = styled(InputLabelItem)`
  margin-bottom: 15px;
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
    font-size: ${defaultTheme.font.XS};
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: ${defaultTheme.color.MAIN_BG};
  }
`;
const ErrorMsg = styled.div`
  font-size: ${defaultTheme.font.XS};
  margin-bottom: 7.5px;
`;

const AuthTimerSpan = styled.span`
  position: absolute;
  right: 100px;
  bottom: 10px;
  color: red;
  font-size: 14px;
`;

const StyleEmailAuthNumberItem = styled.div`
  margin-bottom: 15px;
  width: 100%;
  position: relative;

 
  input {
    border-bottom: 1px solid #ddd;s
    width: 100%;
    height: 40px;
    color: ${defaultTheme.color.MAIN_COLOR};
  }

  button {
    font-size: ${defaultTheme.font.XS};
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: ${defaultTheme.color.MAIN_BG};
    &:nth-of-type(2) {
      text-decoration: underline;
      color: ${defaultTheme.color.MAIN_COLOR};
      right: 50px;
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
            <Button disabled={false} onClick={sendAuthNumber}>
              인증번호 전송
            </Button>
          </>
        }
      />
      {isValidation && <ErrorMsg>{Exp.email}</ErrorMsg>}
      {/* {!flag.isShowAuthNumberInput && <ErrorMsg>이메일이 전송되었습니다.</ErrorMsg>} */}
      {!flag.isShowAuthNumberInput && (
        <>
          <StyleEmailAuthNumberItem>
            <Input maxLength={6} value={authNumber} onChange={changeAuthNumber} />
            <AuthTimerSpan>
              <AuthTimer />
            </AuthTimerSpan>
            <Button disabled={false} onClick={checkAuthNumber}>
              확인
            </Button>
            <Button disabled={false} onClick={resendAuthNumber}>
              재요청
            </Button>
          </StyleEmailAuthNumberItem>
          {/* {!flag.isAuthNumberComplete && <span>인증 되었습니다</span>} */}
        </>
      )}
      <AuthButton text='회원가입' onClick={signUpHandler} disabled={false} />
    </InputLabelItemWrap>
  );
};

export default SignUpInputFormView;
