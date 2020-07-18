import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

interface Props {
  source: ImageSourcePropType;
  x: Animated.Node<number>;
}

const Picture: React.FC<Props> = () => {
  return (
    <View>
      <Text />
    </View>
  );
};

export default Picture;
