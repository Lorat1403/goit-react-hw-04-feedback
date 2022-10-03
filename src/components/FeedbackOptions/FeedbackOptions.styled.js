import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: lightseagreen;
  padding: 10px 0 10px 0;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  cursor: pointer;

  :hover {
    background-color: orange;
    color: white;
  }
`;
