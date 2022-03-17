import styled from "styled-components/native";
import { COLOR, WIDTH } from "../../../constant";

export const HeaderWrapper = styled.View`
  background: ${COLOR.navyDark};
  padding: 0 24px;
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.View`
  position: relative;
`;

export const SearchIcon = styled.View`
  position: absolute;
  top: 7%;
  width: 20px;
  height: 20px;
  right: 10px;
`;

export const SearchItem = styled.TextInput`
  width: 280px;
  height: 34px;
  border-radius: 04px;
  border: none;
  padding: 0 18px;
  font-size: 14px;
  background-color: #fff;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`;

export const AddItemContainer = styled.TouchableOpacity`
  width: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    display: none;
    position: absolute;
    height: 100%;
    width: 1px;
    left: -24px;
    top: 0;
    bottom: 0;
    background: ${COLOR.grayish};
  }
`;
