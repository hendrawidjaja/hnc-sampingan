/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE, FONT } from "../../styles/base";

export const WrapperLi = styled.li`
  display: flex;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 0.5rem;

    @media ${DEVICE.minDesktop} {
      margin-top: 0.8rem;
    }
  }

  a {
    color: ${COLOR.DarkGrey};
    ${FONT.Span};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const IndexNumber = styled.span`
  ${FONT.Span};
  color: ${COLOR.DarkGrey};
  margin-right: 0.3rem;
  position: relative;
`;

export const A = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    flex-direction: row;
  }
`;

export const H4 = styled.h4`
  ${FONT.ListTitle};
  ${COLOR.ListTitle};
`;

export const SanitizeUrl = styled.span`
  ${FONT.ListTitle};
  color: ${COLOR.DarkGrey};
  position: relative;

  @media ${DEVICE.minDesktop} {
    padding: 0 0.3rem;
  }
`;

export const WrapperInformation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Points = styled.div`
  color: ${COLOR.DarkGrey};
  ${FONT.Span};
`;

export const Divider = styled.span`
  padding: 0 0.25rem;
  color: ${COLOR.Divider};
`;

export const WrapperTiming = styled.div`
  position: relative;
  color: ${COLOR.DarkGrey};
  ${FONT.Span};
`;
