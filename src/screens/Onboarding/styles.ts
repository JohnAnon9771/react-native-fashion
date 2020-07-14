import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { height } = Dimensions.get("window");
export const SLIDE_HEIGHT = height * 0.7;

export const Container = styled.View`
  flex: 1;
`;

export const Slider = styled(Animated.View)`
  height: ${SLIDE_HEIGHT}px;
  border-bottom-right-radius: 75px;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 75px;
`;

export const Pagination = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75px;
`;
