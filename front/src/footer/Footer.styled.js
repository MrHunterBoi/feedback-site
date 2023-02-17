import styled from "styled-components";

export const Icon = styled.img`
  width: 70%;
`;

export const Footer = styled.footer`
  background-image: url("${props => props.src}");
  padding: 9vh 22%;
  display: flex;
  gap: 1vw;
  background-color: #FAFAFA;
  background-size: cover;
  border-top: 1px solid #D8D8D8;
`;