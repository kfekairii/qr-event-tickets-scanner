/* eslint-disable react-native/no-inline-styles */
import { View } from "react-native";
import React from "react";
import Svg, { Defs, Mask, Path, Rect } from "react-native-svg";
import { height, width } from "../utils/consttants";
import { useToken } from "@gluestack-style/react";

const CustomFrame = () => {
  const primary500 = useToken("colors", "primary500");
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Svg height={"100%"} width={"100%"}>
        <Defs>
          <Mask id="mask" x="00" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="#fff" />
            <Rect
              height="234"
              width="234"
              translateX={width / 4 - 8}
              translateY={height / 3 - 8}
            />
          </Mask>
        </Defs>
        <Rect
          height="100%"
          width="100%"
          fill="rgba(0, 0, 0, 0.5)"
          mask="url(#mask)"
          fill-opacity="0"
        />
        <Svg fill="none">
          <Path
            d="M23.6406 2.26367L9.99937 2.26372C5.5811 2.26374 1.9994 5.84545 1.9994 10.2637L1.9994 24.808"
            stroke={primary500}
            strokeWidth={4}
            translateX={width / 4}
            translateY={height / 3}
          />
          <Path
            d="M197.359 2.26367L211.001 2.26372C215.419 2.26374 219.001 5.84545 219.001 10.2637L219.001 24.808"
            stroke={primary500}
            strokeWidth={4}
            translateX={width / 4}
            translateY={height / 3}
          />
          <Path
            d="M23.6406 218.262L9.99937 218.262C5.5811 218.262 1.9994 214.68 1.9994 210.262L1.9994 195.717"
            stroke={primary500}
            strokeWidth={4}
            translateX={width / 4}
            translateY={height / 3}
          />
          <Path
            d="M197.359 218.262L211.001 218.262C215.419 218.262 219.001 214.68 219.001 210.262L219.001 195.717"
            stroke={primary500}
            strokeWidth={4}
            translateX={width / 4}
            translateY={height / 3}
          />
        </Svg>
      </Svg>
    </View>
  );
};

export default CustomFrame;
