import { Header, Footer } from 'components/common/common';
import React from 'react';
import * as S from './main-layout.styled';

function MainLayout({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <Header />
      <S.StyledMain>
        {children}
      </S.StyledMain>
      <Footer />
    </>
  );
}

export default MainLayout;
