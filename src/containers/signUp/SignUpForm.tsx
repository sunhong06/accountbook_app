import { signUpObj } from '@/types/user';
import { useState, FormEvent } from 'react';
import SignUpInputItemGroupView from '../../views/signup/SignUpFormView';
import { isValidate } from '@/utils/isValidate';
import { checkAuthCode, createSignUp, sendAuthCode, userIdCheck } from '@/services/api/auth';
import { useRouter } from 'next/navigation';

const SignUpInputForm = () => {
  const [inputValue, setInputValue] = useState<signUpObj>({ id: '', password: '', passwordConfirm: '', email: '' });
  const [authNumber, setAuthNumber] = useState('');
  const [flag, setFlag] = useState({
    isUsernameAvailable: true,
    isShowAuthNumberInput: true,
    isAuthNumberComplete: true,
  });
  const [isValidation, setIsValidation] = useState(false);
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const router = useRouter();

  const inputChangeHandler = (key: keyof signUpObj, value: any) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
  };

  // input 감지
  const idInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    inputChangeHandler('id', e.currentTarget.value);
    setFlag((prev) => ({ ...prev, isUsernameAvailable: true }));
  };
  const passwordInputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    inputChangeHandler('password', e.currentTarget.value);
  const passwordConfirmInputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    inputChangeHandler('passwordConfirm', e.currentTarget.value);
  const emailInputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    inputChangeHandler('email', e.currentTarget.value);

  const changeAuthNumber = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAuthNumber(value);
  };

  // 회원가입
  const signUpHandler = async () => {
    if (!Exp.id && !Exp.email && Exp.password == '' && Exp.passwordConfirm == '') {
      setIsValidation(false);
    }
    if (Exp.id || Exp.email || Exp.password !== '' || Exp.passwordConfirm !== '') {
      setIsValidation(true);
    }
    if (flag.isUsernameAvailable) {
      return alert('아이디 중복 확인이 필요합니다.');
    }
    if (flag.isShowAuthNumberInput) {
      return alert('이메일 인증을 해주세요.');
    }
    if (flag.isAuthNumberComplete) {
      return alert('인증번호 인증을 완료해주세요.');
    }
    try {
      const res = await createSignUp({ email: inputValue.email, id: inputValue.id, password: inputValue.password });
      alert('회원가입이 완료되었습니다.');
      router.replace('/');
    } catch (error: any) {
      return alert('회원가입이 실패하었습니다.');
    }
  };

  // 인증번호 확인
  const checkAuthNumber = async () => {
    try {
      const res = await checkAuthCode({ authNumber, email: inputValue.email });

      setFlag((prev) => ({ ...prev, isAuthNumberComplete: false }));
      setMinutes(0);
      setSeconds(0);
      return alert('인증되었습니다.');
    } catch (error: any) {
      setFlag((prev) => ({ ...prev, isAuthNumberComplete: true }));
      return alert('인증번호 틀림 또는 만료되었습니다.');
    }
  };

  // 이메일 인증번호 보내기
  const sendAuthNumber = async () => {
    try {
      const res = await sendAuthCode(inputValue.email);
      setFlag((prev) => ({ ...prev, isShowAuthNumberInput: false }));
      setMinutes(5);
      setSeconds(0);
      return alert('이메일이 전송되었습니다.');
    } catch (error) {
      setFlag((prev) => ({ ...prev, isShowAuthNumberInput: true }));
      return alert('이메일 전송에 실패하였습니다.');
    }
  };

  // id중복확인
  const checkIdHandler = async () => {
    if (inputValue.id == '') {
      return alert('ID를 입력해주세요.');
    }
    if (Exp.id) {
      return alert(Exp.id);
    }
    try {
      const res = await userIdCheck(inputValue.id);
      alert('사용 가능한 ID 입니다.');
      setFlag((prev) => ({ ...prev, isUsernameAvailable: false }));
    } catch (error: any) {
      alert('이미 사용중인 ID입니다.');
      setFlag((prev) => ({ ...prev, isUsernameAvailable: true }));
      setInputValue((prev) => ({ ...prev, id: '' }));
      console.log(error);
    }
  };

  // 이메일 재요청
  const resendAuthNumber = async () => {
    sendAuthNumber();
  };

  // 유효성검사
  const Exp = isValidate(inputValue, inputValue);

  const props = {
    Exp,
    idInputChangeHandler,
    passwordInputChangeHandler,
    passwordConfirmInputChangeHandler,
    emailInputChangeHandler,
    resendAuthNumber,
    changeAuthNumber,
    sendAuthNumber,
    checkAuthNumber,
    inputValue,
    authNumber,
    signUpHandler,
    checkIdHandler,
    flag,
    isValidation,
    setMinutes,
    setSeconds,
    seconds,
    minutes,
  };

  return <SignUpInputItemGroupView {...props} />;
};

export default SignUpInputForm;
