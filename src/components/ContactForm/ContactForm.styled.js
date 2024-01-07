import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
  outline: 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    background-color: #e0e0e0;
  }
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;
