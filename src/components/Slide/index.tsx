import React from "react";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

import { SLIDE_HEIGHT } from "../../screens/Onboarding/styles";

import { Container, Block, Title } from "./styles";

const { width } = Dimensions.get("window");

interface Props {
  title: string;
  right?: boolean;
}

const Slide: React.FC<Props> = ({ title, right }) => {
  const [loaded] = useFonts({
    SFProTextBold: require("../../assets/fonts/SF-Pro-Text-Bold.otf"),
    SFProTextSemibold: require("../../assets/fonts/SF-Pro-Text-Semibold.otf"),
    SFProTextRegular: require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!loaded) {
    return null;
  }

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <Container>
      <Block style={{ ...{ transform } }}>
        <Title style={{ fontFamily: "SFProTextBold" }}>{title}</Title>
      </Block>
    </Container>
  );
};

export default Slide;
