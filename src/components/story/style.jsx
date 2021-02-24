/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE } from "../../styles/base";

export const WrapperStory = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const WrapperUl = styled.ul``;
export const WrapperLi = styled.li``;
