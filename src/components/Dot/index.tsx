import React from "react";
import Animated from "react-native-reanimated";

const { interpolate, Extrapolate } = Animated;

interface Props {
  currentIndex: Animated.Node<number>;
  index: number;
}

const Dot: React.FC<Props> = ({ currentIndex, index }) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1, index + 2],
    outputRange: [0.5, 1, 0.5, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1, index + 2],
    outputRange: [0.5, 1, 0.5, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        backgroundColor: "#2CB9B0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 2,
        opacity,
        transform: [{ scale }],
      }}
    />
  );
};

export default Dot;
