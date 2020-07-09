import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Slide from "../../components/Slide";

import { Container, Footer, Slider, Content } from "./styles";

const { width } = Dimensions.get("window");

const Onboarding: React.FC = () => {
  return (
    <Container>
      <Slider>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </Slider>
      <Footer>
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}
        />
        <Content
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#fff" }}
        />
      </Footer>
    </Container>
  );
};

export default Onboarding;
