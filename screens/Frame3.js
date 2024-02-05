import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>{`Ахмед Ахмедович 
Ахмедов`}</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>администрация</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>администрация</Text>
      </View>
      <View style={[styles.frameInner, styles.frameInnerBorder]} />
      <Text style={[styles.text3, styles.textTypo]}>😵</Text>
      <Text style={[styles.text4, styles.textFlexBox]}>объекты</Text>
      <Text style={[styles.text5, styles.textFlexBox]}>на больничном</Text>
      <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 42,
    width: 317,
    borderBottomWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderTopWidth: 1,
    left: 23,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    textTransform: "capitalize",
    position: "absolute",
  },
  frameInnerBorder: {
    borderColor: Color.red,
    top: 0,
    borderStyle: "solid",
  },
  textFlexBox: {
    letterSpacing: -0.7,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  text: {
    top: 108,
    fontSize: FontSize.size_6xl,
    lineHeight: 24,
    textAlign: "left",
    textTransform: "capitalize",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    left: 23,
    position: "absolute",
  },
  frameChild: {
    marginTop: -14,
    left: 5,
    width: 40,
    height: 29,
    borderRadius: Border.br_8xs,
    top: "50%",
    position: "absolute",
  },
  text1: {
    marginTop: -8,
    left: 85,
    fontSize: FontSize.size_smi,
    letterSpacing: -0.6,
    top: "50%",
  },
  rectangleParent: {
    top: 245,
  },
  rectangleGroup: {
    top: 204,
  },
  frameInner: {
    left: 0,
    backgroundColor: Color.colorTomato_100,
    width: 364,
    height: 55,
    borderTopWidth: 1,
    borderColor: Color.red,
    top: 0,
    position: "absolute",
  },
  text3: {
    top: 20,
    fontSize: FontSize.size_54xl,
    letterSpacing: -3.6,
    left: 23,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text4: {
    top: 176,
    fontSize: FontSize.size_mini,
    textTransform: "lowercase",
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    left: 23,
  },
  text5: {
    top: 445,
    left: 243,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    letterSpacing: -0.7,
  },
  groupChild: {
    right: 0,
    borderWidth: 1,
    borderColor: Color.red,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  vectorIcon: {
    top: 7,
    right: 7,
    width: 9,
    height: 9,
    position: "absolute",
  },
  rectangleContainer: {
    top: 440,
    right: 319,
  },
  parent: {
    backgroundColor: Color.colorLinen,
    flex: 1,
    width: "100%",
    height: 472,
    overflow: "hidden",
  },
});

export default Frame3;
