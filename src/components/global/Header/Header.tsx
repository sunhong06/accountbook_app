'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Button from '../../common/Button';
import { flexbox } from '@/styles/mixins/flexbox';
import defaultTheme from '@/styles/theme/defaultTheme';
import Container from '../../common/layout/Container';
import Logo from '../../common/Logo';
import { getToken, getUserid, signOut } from '@/services/api/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { jwtUtils } from '@/utils/jwt';
import { set } from 'mongoose';

const HeaderWrapper = styled.div`
  height: 70px;
  background-color: ${defaultTheme.color.MAIN_BG};
  border-bottom: 1px solid #2f2f2f;
`;

const HeaderContent = styled.header`
  ${flexbox('space-between', 'center')};
  height: 100%;
  color: ${defaultTheme.color.WHILE};
`;

const StyleLink = styled(Link)`
  padding-right: 10px;
  font-size: ${defaultTheme.font.XS};
  color: ${defaultTheme.color.WHILE};
`;

const StyleSpan = styled.span`
  padding-right: 10px;
  font-size: ${defaultTheme.font.XS};
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const signOutHandler = async () => {
    try {
      const res = await signOut();

      if (res.success) {
        alert('로그아웃이 완료되었습니다.');
        localStorage.clear();
        setIsLogin(false);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserInfo = async (accessToken: string) => {
    try {
      const res = await getUserid(accessToken);
      setIsLogin(true);
      setUserId(res.userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.push('/signIn');
    } else {
      fetchUserInfo(accessToken);
    }
  }, []);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <h1>
            <Logo width={40} height={40} />
          </h1>
          {isLogin ? (
            <div>
              <StyleSpan>{userId}님 어서오세요!</StyleSpan>
              <Button disabled={false} onClick={signOutHandler}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div>
              <StyleLink href={'/signIn'}>로그인</StyleLink>
              <StyleLink href={'/signUp'}>회원가입</StyleLink>
            </div>
          )}
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
