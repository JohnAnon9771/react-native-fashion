import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useFonts } from "expo-font";

const { width } = Dimensions.get("window");

interface Props {
  label: string;
  right?: boolean;
}

const Slide: React.FC<Props> = ({ label, right }) => {
  const [loaded] = useFonts({
    SFProTextBold: require("../../assets/fonts/SF-Pro-Text-Bold.otf"),
    SFProTextSemibold: require("../../assets/fonts/SF-Pro-Text-Semibold.otf"),
    SFProTextRegular: require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ width }}>
      <Text style={{ fontFamily: "SFProTextBold" }}>{label}</Text>
    </View>
  );
};

export default Slide;
