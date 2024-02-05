import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone13141}>
      <Image
        style={[styles.iphone13141Child, styles.iphone13141Position]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <LinearGradient
        style={[styles.iphone13141Item, styles.iphone13141Position]}
        locations={[0, 1]}
        colors={["#f9f1e6", "rgba(249, 241, 230, 0.15)"]}
      />
      <Text style={[styles.text, styles.textTypo3]}>Администрация</Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text1, styles.textClr]}>инн</Text>
        <Text style={[styles.text2, styles.textTypo]}>1234567890</Text>
      </View>
      <View style={[styles.bxmapParent, styles.parentPosition]}>
        <Image
          style={styles.bxmapIcon}
          contentFit="cover"
          source={require("../assets/bxmap.png")}
        />
        <Image
          style={[styles.frameChild, styles.text4Position]}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <Text style={[styles.text3, styles.textTypo]}>
          пр. Ленина, 38, Магнитогорск, Челябинская обл., 455000
        </Text>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
        <Text style={[styles.text4, styles.text4Position]}>
          Ложкин Роман Александрович
        </Text>
        <Text style={[styles.text5, styles.textTypo]}>Крутая абоба</Text>
        <Text style={[styles.text6, styles.textTypo]}>+79127654895</Text>
      </View>
      <View style={[styles.rectangleParent, styles.frameInnerLayout1]}>
        <View style={[styles.frameInner, styles.frameInnerLayout]} />
        <View style={[styles.group, styles.groupLayout]}>
          <Text style={[styles.text7, styles.textTypo1]}>Новая заявка</Text>
          <Image
            style={[styles.ictwotonePlusIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ictwotoneplus.png")}
          />
        </View>
      </View>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={[styles.text8, styles.textPosition]}>😎</Text>
      </View>
      <Text style={[styles.text9, styles.textTypo3]}>заявки</Text>
      <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text10, styles.textTypo2]}>администрация</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-23.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text10, styles.textTypo2]}>администрация</Text>
      </View>
      <View style={[styles.frameView, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text10, styles.textTypo2]}>администрация</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text10, styles.textTypo2]}>администрация</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-24.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text10, styles.textTypo2]}>администрация</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text10, styles.textTypo2]}>администрация</Text>
      </View>
      <Text style={[styles.text16, styles.textPosition]}>журнал работ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13141Position: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    color: Color.colorBlack,
    left: 15,
    position: "absolute",
  },
  parentPosition: {
    borderLeftWidth: 2,
    borderColor: Color.red,
    borderStyle: "solid",
    left: 13,
    position: "absolute",
  },
  textClr: {
    color: Color.red,
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  text4Position: {
    right: 2,
    position: "absolute",
  },
  frameInnerLayout1: {
    height: 40,
    width: 360,
  },
  frameInnerLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo1: {
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
  },
  groupChildLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 42,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    width: 360,
    borderStyle: "solid",
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iphone13141Child: {
    height: 247,
  },
  iphone13141Item: {
    height: 248,
    backgroundColor: "transparent",
  },
  text: {
    top: 209,
    fontSize: FontSize.size_13xl,
    letterSpacing: -1.6,
    textAlign: "left",
    color: Color.colorBlack,
    textTransform: "capitalize",
  },
  text1: {
    top: 2,
    left: 3,
    textTransform: "uppercase",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    left: 40,
    textTransform: "lowercase",
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  parent: {
    top: 336,
    width: 123,
    height: 17,
  },
  bxmapIcon: {
    marginTop: -10,
    right: 343,
    width: 16,
    height: 20,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    width: 15,
    height: 15,
    top: 0,
  },
  text3: {
    right: 23,
    color: Color.colorGray_100,
    width: 298,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  bxmapParent: {
    top: 282,
    width: 362,
    height: 34,
  },
  frameItem: {
    height: "30.77%",
    width: "6.18%",
    top: "34.62%",
    right: "92.16%",
    bottom: "34.62%",
    left: "1.66%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text4: {
    top: 1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  text5: {
    top: 21,
    right: 133,
    fontSize: 11,
    letterSpacing: -0.5,
    textTransform: "lowercase",
    color: Color.colorBlack,
    position: "absolute",
  },
  text6: {
    top: 37,
    right: 118,
    textTransform: "lowercase",
    letterSpacing: -0.6,
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupParent: {
    top: 373,
    width: 241,
    height: 52,
  },
  frameInner: {
    backgroundColor: Color.red,
    height: 40,
    width: 360,
    left: 0,
    top: 0,
  },
  text7: {
    top: 4,
    left: 24,
    color: Color.colorLinen,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  ictwotonePlusIcon: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  group: {
    top: 8,
    left: 125,
    width: 111,
  },
  rectangleParent: {
    top: 784,
    left: 15,
    width: 360,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  text8: {
    marginTop: -12.5,
    marginLeft: -12.5,
    fontSize: FontSize.size_6xl,
    letterSpacing: -1.2,
    top: "50%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    textTransform: "capitalize",
  },
  ellipseParent: {
    top: 212,
    left: 340,
  },
  text9: {
    top: 455,
    fontSize: FontSize.size_mini,
    textTransform: "lowercase",
    textAlign: "left",
    color: Color.colorBlack,
  },
  rectangleIcon: {
    marginTop: -14,
    left: 5,
    width: 40,
    height: 29,
    top: "50%",
  },
  text10: {
    marginTop: -8,
    left: 85,
    fontSize: FontSize.size_smi,
    top: "50%",
    letterSpacing: -0.6,
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "left",
    textTransform: "capitalize",
  },
  groupIcon: {
    top: 9,
    left: 330,
    width: 25,
    height: 25,
    position: "absolute",
  },
  rectangleGroup: {
    top: 529,
  },
  rectangleContainer: {
    top: 611,
  },
  frameView: {
    top: 693,
  },
  rectangleParent1: {
    top: 488,
  },
  rectangleParent2: {
    top: 570,
  },
  rectangleParent3: {
    top: 652,
  },
  text16: {
    marginLeft: -38,
    top: 743,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textTransform: "lowercase",
    color: Color.red,
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
  },
  iphone13141: {
    backgroundColor: Color.colorLinen,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;
