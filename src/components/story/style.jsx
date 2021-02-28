/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE } from "../../styles/base";

export const WrapperPoints = styled.div``;

export const WrapperLi = styled.li`
  position: relative;
  margin-top: 1rem;

  a {
    color: ${COLOR.Span};
    font-size: 13px;

    @media ${DEVICE.minDesktop} {
      font-size: 14px;
    }
  }
`;

export const WrapperEditor = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ButtonClose = styled.div`
  position: absolute;
  right: 2.5%;
  top: 12.5%;
  cursor: pointer;
`;

export const WrapperEditorInformation = styled.div`
  position: relative;
  width: 100%;
  background: yellow;
`;

export const Span = styled.span`
  color: ${COLOR.Span};
  font-size: 12px;

  @media ${DEVICE.minDesktop} {
    font-size: 13px;
  }
`;

export const A = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const WrapperInformation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const H3 = styled.h3`
  color: #323232;
  position: relative;

  @media ${DEVICE.minDesktop} {
    font-size: 1rem;
  }
`;

export const WrapperTiming = styled.div`
  position: relative;
`;

export const Divider = styled.span`
  padding: 0 0.25rem;
  color: #a2a2a2;
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Url = styled.span`
  align-items: flex-end;
  position: relative;
  padding: 0 0.25rem;
`;

export const Editor = styled.span`
  cursor: pointer;
`;
