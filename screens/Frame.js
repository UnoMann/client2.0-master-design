import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={[styles.frameItem, styles.frameItemLayout]} />
      <View style={[styles.frameInner, styles.frameBg]} />
      <Text style={[styles.text, styles.textTypo]}>Мастера</Text>
      <Text style={[styles.text1, styles.textTypo]}>объекты</Text>
      <View style={[styles.rectangleView, styles.frameItemLayout]} />
      <View style={[styles.frameChild1, styles.frameBg]} />
      <View style={[styles.frameChild2, styles.frameChildLayout1]} />
      <View style={[styles.frameChild3, styles.frameChildLayout1]} />
      <View style={[styles.frameChild4, styles.frameChildLayout1]} />
      <View style={[styles.frameChild5, styles.frameChildLayout1]} />
      <View style={[styles.frameChild6, styles.frameChildLayout]} />
      <View style={[styles.frameChild7, styles.frameChildLayout]} />
      <View style={[styles.frameChild8, styles.frameChildPosition1]} />
      <View style={[styles.frameChild9, styles.frameChildPosition1]} />
      <View style={[styles.frameChild10, styles.frameChildPosition]} />
      <View style={[styles.frameChild11, styles.frameChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameItemLayout: {
    height: 35,
    width: 35,
    top: 56,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  frameBg: {
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textTransform: "lowercase",
    letterSpacing: -0.7,
    fontSize: FontSize.size_mini,
    left: 15,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 95,
    width: 81,
    backgroundColor: Color.colorGainsboro,
    top: 165,
    position: "absolute",
  },
  frameChildLayout: {
    width: 173,
    top: 349,
    height: 95,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  frameChildPosition1: {
    top: 462,
    width: 173,
    height: 95,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  frameChildPosition: {
    top: 575,
    width: 173,
    height: 95,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: "#a1a1a1",
    width: 390,
    height: 111,
    position: "absolute",
  },
  frameItem: {
    left: 293,
    borderRadius: 77,
  },
  frameInner: {
    top: 51,
    width: 138,
    height: 44,
    left: 15,
  },
  text: {
    top: 137,
  },
  text1: {
    top: 302,
  },
  rectangleView: {
    left: 340,
  },
  frameChild1: {
    top: 298,
    left: 350,
    width: 25,
    height: 25,
  },
  frameChild2: {
    left: 15,
  },
  frameChild3: {
    left: 108,
  },
  frameChild4: {
    left: 201,
  },
  frameChild5: {
    left: 294,
  },
  frameChild6: {
    left: 15,
  },
  frameChild7: {
    left: 202,
  },
  frameChild8: {
    left: 15,
  },
  frameChild9: {
    left: 202,
  },
  frameChild10: {
    left: 15,
  },
  frameChild11: {
    left: 201,
  },
  rectangleParent: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Frame;
