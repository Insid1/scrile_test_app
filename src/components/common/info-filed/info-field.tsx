import { memo } from 'react';
import * as S from './info-field.styled';

interface InfoFieldProps {
  label: string | number,
  title: string | number,
}

function InfoField({ label, title }: InfoFieldProps) {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}

export default memo(InfoField);
