import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import Slide from "../../components/Slide";
import SubSlide from "../../components/Slide/SubSlide";
import Dot from "../../components/Dot";

import { Container, Content, Footer, Slider } from "./styles";

const { width } = Dimensions.get("window");

const { multiply, divide } = Animated;

const slides = [
  {
    id: 1,
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
  },
  {
    id: 2,
    title: "Playful",
    subtitle: "Hear if First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
  },
  {
    id: 3,
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
  },
  {
    id: 4,
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
  },
];

const Onboarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Animated.ScrollView
          {...scrollHandler}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          scrollEventThrottle={1}
          decelerationRate="fast"
        >
          <View>
            {slides.map((item, index) => (
              <Dot
                key={item.id}
                currentIndex={divide(x, width)}
                {...{ index }}
              />
            ))}
          </View>
          {slides.map((slide, index) => (
            <Slide key={slide.id} title={slide.title} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Slider>
      <Footer>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Content
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#fff",
            width: width * slides.length,
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {slides.map((item, index) => (
            <SubSlide
              key={item.id}
              subtitle={item.subtitle}
              description={item.description}
              last={index === slides.length - 1}
              onPress={() => {
                scroll.current
                  ?.getNode()
                  .scrollTo({ x: width * (index + 1), animated: true });
              }}
            />
          ))}
        </Content>
      </Footer>
    </Container>
  );
};

export default Onboarding;
