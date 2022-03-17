import styled from "styled-components/native";
import { COLOR, WIDTH } from "../../../constant";

export const MainWrapper = styled.View`
  width: 100%;
  height: 100%;
  background: ${COLOR.skyBlue};
  padding: 48px 24px;
`;

export const Items = styled.View`
  color: ${COLOR.indigoDarker};
  position: relative;
  font-weight: 700;
  font-size: 24px;
  height: 48px;
  background: #fff;
  padding: 0 24px;
  padding-left: 48px;
  flex-direction: row;
  align-items: center;
  margin: 0 12px 18px;
`;

export const ItemNumber = styled.View`
  position: absolute;
  left: -8px;
  font-weight: 700;
  font-size: 14px;
  width: 42px;
  height: 28px;
  background: ${COLOR.cherry};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const NotFound = styled.View`
  color: ${COLOR.navyDark};
  font-size: 24px;
  width: 100%;
  justify-content: center;
  display: flex;
  font-weight: 700;
`;
