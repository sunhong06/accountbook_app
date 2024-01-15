import { signUpObj } from '@/types/user';
import { axiosInstance } from '../instance';

// 회원가입
export const createSignUp = async (formData: any) => {
  const res = await axiosInstance.post('/api/auth/signUp', formData);

  return res.data;
};

// 인증번호 확인
export const checkAuthCode = async (authNum: any) => {
  const res = await axiosInstance.post('api/auth/email/result', authNum);

  return res.data;
};

// 이메일 인증번호 보내기
export const sendAuthCode = async (formData: string) => {
  const res = await axiosInstance.post('api/auth/email', formData);

  return res.data;
};

// id중복확인
export const userIdCheck = async (formData: string) => {
  const res = await axiosInstance.post('api/auth/checkid', formData);

  return res.data;
};
