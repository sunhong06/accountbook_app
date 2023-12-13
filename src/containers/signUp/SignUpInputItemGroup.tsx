import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import InputLabelItem from '@/components/signUp/InputLabelItem';
import defaultTheme from '@/styles/theme/defaultTheme';
import { signUpObj } from '@/types/user';
import { useState, FormEvent } from 'react';
import styled from 'styled-components';

const InputLabelItemWrap = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const StyleInputLabelItem = styled(InputLabelItem)`
  margin-bottom: 20px;
  width: 100%;
  position: relative;

  label {
    color: #9ca3af;
    display: block;
    font-size: 12px;
    padding: 10px 0 0;
  }
  input {
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: 40px;
    color: #fff;
  }

  button {
    position: absolute;
    bottom: 10px;
    right: 0;
    color: ${defaultTheme.color.MAIN_COLOR};
  }
`;

const SignUpInputItemGroup = () => {
  const [inputValue, setInputValue] = useState<signUpObj>({ id: '', password: '', passwordConfirm: '', email: '' });
  const [authNumber, setAuthNumber] = useState('');
  const [isShowAuthNumberInput, setIsShowAuthNumberInput] = useState(false);

  const inputChangeHandler = (key: keyof signUpObj, value: any) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
  };

  const changeAuthNumber = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAuthNumber(value);
  };

  const sendAuthNumber = () => {};
  const resendAuthNumber = () => {};

  return (
    <InputLabelItemWrap>
      <StyleInputLabelItem
        label='아이디'
        value={inputValue.id}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) => inputChangeHandler('id', e.currentTarget.value)}
        buttonComponents={<button>중복확인</button>}
      />

      <StyleInputLabelItem
        label='비밀번호'
        type='password'
        value={inputValue.password}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) => inputChangeHandler('password', e.currentTarget.value)}
      />

      <StyleInputLabelItem
        label='비밀번호 확인'
        type='password'
        value={inputValue.passwordConfirm}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) =>
          inputChangeHandler('passwordConfirm', e.currentTarget.value)
        }
      />

      <StyleInputLabelItem
        label='이메일'
        value={inputValue.email}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) => inputChangeHandler('email', e.currentTarget.value)}
        buttonComponents={
          <>
            <Button disabled={false} onClick={sendAuthNumber}>
              인증번호 전송
            </Button>
          </>
        }
      />

      {isShowAuthNumberInput && (
        <>
          <Input value={authNumber} onChange={changeAuthNumber} />
          <Button disabled={false} onClick={resendAuthNumber}>
            재요청
          </Button>
          <span>인증 되었습니다</span>
        </>
      )}
    </InputLabelItemWrap>
  );
};

export default SignUpInputItemGroup;
