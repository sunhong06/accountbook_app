import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import InputLabelItem from '@/components/signUp/InputLabelItem';
import { signUpObj } from '@/types/user';
import { useState, FormEvent } from 'react';

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
    <>
      <InputLabelItem
        label='아이디'
        value={inputValue.id}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) => inputChangeHandler('id', e.currentTarget.value)}
        buttonComponents={<button>중복확인</button>}
      />

      <InputLabelItem
        label='비밀번호'
        type='password'
        value={inputValue.password}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) => inputChangeHandler('password', e.currentTarget.value)}
      />

      <InputLabelItem
        label='비밀번호 확인'
        type='password'
        value={inputValue.passwordConfirm}
        onChangeHandler={(e: FormEvent<HTMLInputElement>) =>
          inputChangeHandler('passwordConfirm', e.currentTarget.value)
        }
      />

      <InputLabelItem
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
    </>
  );
};

export default SignUpInputItemGroup;
