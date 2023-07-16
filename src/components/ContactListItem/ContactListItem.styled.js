import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background-color: #FFD233;
    color: #5218fa;
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactName = styled.span`
  flex-grow: 1;
  text-transform: capitalize;
  font-size: 22px;
  padding-left: 10px;
`;

export const ContactNumber = styled.span`
  margin-right: 20px;
  margin-left: 7px;
  font-size: 18px;
`;
