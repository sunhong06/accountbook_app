import { signInObj } from '@/types/user';
import { useState, FormEvent } from 'react';
import SignInFormView from '@/views/signin/SignInFormView';
import { signIn } from '@/services/api/auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { userInfo } from '@/redux/userSlice';

const SignInForm = () => {
  const [inputValue, setInputValue] = useState<signInObj>({ id: '', password: '' });
  const dispatch = useDispatch();
  const router = useRouter();

  const inputChangeHandler = (key: keyof signInObj, value: any) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
  };
  const idInputChangeHandler = (e: FormEvent<HTMLInputElement>) => inputChangeHandler('id', e.currentTarget.value);
  const passwordInputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    inputChangeHandler('password', e.currentTarget.value);

  const signInHandler = async () => {
    try {
      const res = await signIn({ id: inputValue.id, password: inputValue.password });
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      alert('로그인이 완료되었습니다.');

      router.push('/');
    } catch (error: any) {
      console.log(error);
      return alert('로그인에 실패하였습니다.');
    }
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
