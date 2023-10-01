import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      font-size: 72px;
    }
  `,
  Element: styled.div`
    height: 100px;
    background-color: #0f5135;
    color: #fff;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export const BreakLogo = ({ result }) => {
  return (
    <S.Wrapper>
      <span>{result[0]}</span>
      <S.Element>{result[1]}</S.Element>
      <span>{result[2]}</span>
    </S.Wrapper>
  );
};
