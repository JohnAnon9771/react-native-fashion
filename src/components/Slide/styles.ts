import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  width: ${width}px;
`;

export const Block = styled.View`
  height: 100px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 76px;
  line-height: 80px;
  color: #fff;
  text-align: center;
`;
