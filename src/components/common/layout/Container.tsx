'use client';

import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
  padding-right: ${defaultTheme.padding.container}px;
  padding-left: ${defaultTheme.padding.container}px;
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Root>{children}</Root>;
};

export default Container;
