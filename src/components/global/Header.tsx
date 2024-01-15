'use client';

import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { flexbox } from '@/styles/mixins/flexbox';
import defaultTheme from '@/styles/theme/defaultTheme';
import Container from '../common/layout/Container';
import Logo from '../common/Logo';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #2f2f2f;
  background-color: ${defaultTheme.color.MAIN_BG};
  height: 70px;
`;

const HeaderContent = styled.header`
  ${flexbox('space-between', 'center')};
  color: ${defaultTheme.color.WHILE};
  height: 100%;
`;

const StyleLink = styled(Link)`
  color: ${defaultTheme.color.WHILE};
  font-size: ${defaultTheme.font.XS};
  padding-right: 10px;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const LogoutHandler = () => {};

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <h1>
            <Logo width={40} height={40} />
          </h1>
          {isLogin ? (
            <>
              <Button disabled={false} onClick={LogoutHandler}>
                로그아웃
              </Button>
            </>
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
