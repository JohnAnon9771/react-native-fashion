import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
`;

export const Slider = styled.View`
  height: ${height * 0.7}px;
  background-color: cyan;
  border-bottom-right-radius: 75px;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  border-top-left-radius: 75px;
`;
