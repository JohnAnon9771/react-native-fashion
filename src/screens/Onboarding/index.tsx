import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import { StackScreenProps } from "@react-navigation/stack";

import Slide from "../../components/Slide";
import SubSlide from "../../components/Slide/SubSlide";
import Dot from "../../components/Dot";
import Picture from "../../components/Picture";
import { StackParamList } from "../../navigation/types";

import { Container, Content, Footer, Slider, Pagination } from "./styles";

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
    picture: require("../../assets/pictures/picture1.png"),
  },
  {
    id: 2,
    title: "Playful",
    subtitle: "Hear if First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: require("../../assets/pictures/picture2.png"),
  },
  {
    id: 3,
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: require("../../assets/pictures/picture3.png"),
  },
  {
    id: 4,
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: require("../../assets/pictures/picture4.png"),
  },
];

type OnboardingProps = StackScreenProps<StackParamList, "Onboarding">;

const Onboarding: React.FC<OnboardingProps> = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <View>
          {slides.map((slide, index) => (
            <Picture key={slide.id} source={slide.picture} {...{ index, x }} />
          ))}
        </View>
        <Animated.ScrollView
          {...scrollHandler}
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
          }}
        >
          <Pagination style={{ ...StyleSheet.absoluteFillObject }}>
            {slides.map((item, index) => (
              <Dot
                key={item.id}
                currentIndex={divide(x, width)}
                {...{ index }}
              />
            ))}
          </Pagination>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
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
          </Animated.View>
        </Content>
      </Footer>
    </Container>
  );
};

export default Onboarding;
