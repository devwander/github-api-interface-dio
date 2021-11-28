import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>Name: {name}</S.WrapperTitle>
      <S.WrapperFullName>Repository:</S.WrapperFullName>
      <S.WrapperLink href={`https://github.com/${linkToRepo}`} target="_blank" rel="noreferrer">
        {console.log(linkToRepo)}
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
