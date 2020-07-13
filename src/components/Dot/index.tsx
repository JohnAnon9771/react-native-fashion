import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

interface Props {
  currentIndex: Animated.Node<number>;
  index: number;
}

const Dot: React.FC<Props> = ({ currentIndex }) => {
  return (
    <View>
      <Text />
    </View>
  );
};

export default Dot;
