import React from "react";
import { Text, StyleSheet } from "react-native";
import { BaseButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProTextRegular",
  },
});

interface Props {
  label: string;
  variant: "default" | "primary";
  onPress: () => void;
}

const Button: React.FC<Props> = ({ variant = "default", label, onPress }) => {
  const backgroundColor =
    variant === "default" ? "rgba(12, 13, 52, 0.05)" : "#2CB9B0";
  const color = variant === "default" ? "#0c0d34" : "#fff";
  return (
    <BaseButton {...{ onPress }} style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </BaseButton>
  );
};

export default Button;
