import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { onScrollEvent, useValue, interpolateColor } from "react-native-redash";

import Slide from "../../components/Slide";
import SubSlide from "../../components/Slide/SubSlide";

import { Container, Footer, Slider, Content } from "./styles";

const { width } = Dimensions.get("window");

const { multiply } = Animated;

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
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Animated.ScrollView
          {...{ onScroll }}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          scrollEventThrottle={1}
          decelerationRate="fast"
        >
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
            />
          ))}
        </Content>
      </Footer>
    </Container>
  );
};

export default Onboarding;
