import { signInObj } from '@/types/user';
import { useState, FormEvent } from 'react';
import SignInFormView from '@/views/signin/SignInFormView';
import { axiosInstance } from '@/services/instance';

const SignInForm = () => {
  const [inputValue, setInputValue] = useState<signInObj>({ id: '', password: '' });

  const inputChangeHandler = (key: keyof signInObj, value: any) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
  };

  const idInputChangeHandler = (e: FormEvent<HTMLInputElement>) => inputChangeHandler('id', e.currentTarget.value);
  const passwordInputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    inputChangeHandler('password', e.currentTarget.value);

  const signInHandler = async () => {
    const res = await axiosInstance.post('api/auth/signIn', { id: 'koko', password: '123456' });
    return res.data;
  };

  const props = {
    idInputChangeHandler,
    passwordInputChangeHandler,
    inputValue,
    signInHandler,
  };
  return <SignInFormView {...props} />;
};

export default SignInForm;
