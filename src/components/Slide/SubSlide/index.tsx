import React from "react";
import { useFonts } from "expo-font";
// import Animated from "react-native-reanimated";

import { Container, Subtitle, Description } from "./styles";

interface Props {
  subtitle: string;
  description: string;
  last?: boolean;
}

const SubSlide: React.FC<Props> = ({ subtitle, description }) => {
  const [loaded] = useFonts({
    SFProTextBold: require("../../../assets/fonts/SF-Pro-Text-Bold.otf"),
    SFProTextSemibold: require("../../../assets/fonts/SF-Pro-Text-Semibold.otf"),
    SFProTextRegular: require("../../../assets/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Container>
      <Subtitle style={{ fontFamily: "SFProTextSemibold" }}>
        {subtitle}
      </Subtitle>
      <Description style={{ fontFamily: "SFProTextRegular" }}>
        {description}
      </Description>
    </Container>
  );
};

export default SubSlide;
