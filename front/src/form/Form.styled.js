import styled, {css} from "styled-components";

const Field = css`
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  font-size: 18px;
  line-height: 180%;
  padding: 20px 50px;
  transition-duration: 0.4s;
  outline: none;
 
  &:focus {
    border-color: black;
  }
`;

const Font = css`
  font-family: 'Apercu Arabic Pro', sans-serif;
  font-size: 18px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3E3E3E;
  margin-bottom: 5vh;
`;

export const Main = styled.main`
  ${Font};
  padding: 10% 10%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;


export const Form = styled.form`
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const Input = styled.input`
  ${Field};
`;

export const Warning = styled.p`
  color: #d05252;
`;

export const Message = styled.textarea`
  font-family: 'Apercu Arabic Pro', sans-serif;
  resize: none;
  height: 20vh;
  ${Field};
`;

export const Button = styled.button`
  ${Font};
  max-width: 40%;
  background: #FAD34F;
  border-radius: 500px;
  color: white;
  border: none;
  margin: 10px 0 0;
  padding: 2.7vh 0;
  
  &:hover {
    cursor: pointer;
  }
`;