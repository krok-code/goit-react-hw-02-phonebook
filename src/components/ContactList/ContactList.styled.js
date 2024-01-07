import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  /* flex: 1; */
`;

export const Button = styled.button`
  padding: 5px 25px;
  margin-left: 20px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    background-color: #e0e0e0;
  }
`;
