import React from "react";
import { useFonts } from "expo-font";
// import Animated from "react-native-reanimated";

import Button from "../../Button";

import { Container, Subtitle, Description } from "./styles";

interface Props {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide: React.FC<Props> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
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
      <Button
        {...{ onPress }}
        label={last ? "Let's get started " : "Next"}
        variant={last ? "primary" : "default"}
      />
    </Container>
  );
};

export default SubSlide;
