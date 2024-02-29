import { signInObj, signUpObj } from '@/types/user';
import axiosInstance from '../instance';

// 회원가입
export const createSignUp = async (formData: any) => {
  const res = await axiosInstance.post('/api/auth/signUp', formData);

  return res.data;
};

//로그인
export const signIn = async (formData: signInObj) => {
  const res = await axiosInstance.post('/api/auth/signIn', formData);

  return res.data;
};

// 로그아웃
export const signOut = async () => {
  const res = await axiosInstance.post('/api/auth/signOut');

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

// token재발급
export const getToken = async () => {
  const res = await axiosInstance.get('api/auth/token');

  return res.data;
};

// user 정보
export const getUserid = async (accessToken: any) => {
  const res = await axiosInstance.post('api/auth/userInfo', accessToken);

  return res.data;
};
