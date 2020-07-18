import React from "react";
import {
  ImageSourcePropType,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

const { interpolate } = Animated;
const { width } = Dimensions.get("window");

interface Props {
  source: ImageSourcePropType;
  x: Animated.Node<number>;
  index: number;
}

const Picture: React.FC<Props> = ({ source, x, index }) => {
  const opacity = interpolate(x, {
    inputRange: [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
      (index + 2) * width,
    ],
    outputRange: [0, 1, 0, 0],
  });
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        { top: 100, alignItems: "center" },
      ]}
    >
      <Animated.Image {...{ source }} style={{ opacity }} />
    </View>
  );
};

export default Picture;
