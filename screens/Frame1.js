import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.ellipseParent, styles.groupLayout]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text, styles.textTypo6]}>А</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <View style={styles.rectangleView} />
      </View>
      <Text style={[styles.text1, styles.textTypo5]}>Мастера</Text>
      <Text style={[styles.text2, styles.textTypo5]}>объекты</Text>
      <View style={[styles.frameItem, styles.frameBorder]} />
      <Image
        style={[styles.image7Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View style={[styles.frameInner, styles.frameChildLayout]} />
      <Text style={[styles.text3, styles.textTypo4]}>😵</Text>
      <Text style={[styles.text4, styles.textTypo3]}>Иван</Text>
      <View style={[styles.frameChild1, styles.frameChildLayout]} />
      <Text style={[styles.text5, styles.textTypo3]}>Иван</Text>
      <View style={[styles.rectangleContainer, styles.frameChildLayout]}>
        <View style={[styles.groupChild1, styles.frameChildLayout]} />
        <Text style={[styles.text6, styles.textTypo3]}>петя</Text>
        <Text style={[styles.text7, styles.textTypo4]}>😎</Text>
      </View>
      <View style={[styles.frameChild2, styles.frameChildLayout]} />
      <View style={[styles.frameChild3, styles.frameChildLayout]} />
      <Text style={[styles.text8, styles.textTypo2]}>ахмед</Text>
      <Text style={[styles.text9, styles.textTypo2]}>😎</Text>
      <Text style={[styles.text10, styles.textTypo3]}>Иван</Text>
      <Text style={[styles.text11, styles.textTypo4]}>😎</Text>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Text style={styles.text12}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <Text style={[styles.text13, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-112.png")}
        />
        <View style={styles.groupChildLayout} />
        <Text style={[styles.text14, styles.textTypo1]}>Частник</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <Text style={[styles.text15, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-113.png")}
        />
        <View style={styles.groupChildLayout} />
        <Text style={[styles.text16, styles.textTypo1]}>Мост</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <Text style={[styles.text17, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <Text style={[styles.text18, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <Text style={[styles.text19, styles.textTypo]}>Администрация</Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.groupChild17, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={styles.text20}>1</Text>
      </View>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    height: 111,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 35,
    height: 35,
    position: "absolute",
  },
  textTypo6: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo5: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textTransform: "lowercase",
    fontSize: FontSize.size_mini,
    left: 15,
    textAlign: "left",
    position: "absolute",
  },
  frameBorder: {
    borderWidth: 2,
    borderColor: Color.red,
    borderStyle: "solid",
  },
  iconPosition: {
    top: 159,
    position: "absolute",
  },
  frameChildLayout: {
    height: 95,
    width: 81,
    position: "absolute",
  },
  textTypo4: {
    color: Color.colorBlack,
    letterSpacing: -1.7,
    fontSize: FontSize.size_16xl,
    textTransform: "capitalize",
  },
  textTypo3: {
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    textTransform: "lowercase",
    color: Color.colorWhite,
  },
  textTypo2: {
    left: 311,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupParentLayout: {
    height: 97,
    width: 177,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.colorTomato_200,
    height: 97,
    width: 177,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textShadowColor: "rgba(4, 4, 4, 0.8)",
    height: 16,
    width: 157,
    top: 66,
    textShadowRadius: 15,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  textTypo1: {
    height: 16,
    width: 157,
    top: 66,
    left: 9,
    textShadowRadius: 15,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 198,
    height: 97,
    width: 177,
    position: "absolute",
  },
  vectorParentLayout: {
    width: 29,
    height: 35,
    position: "absolute",
  },
  frameChild: {
    left: 293,
    width: 32,
    display: "none",
    height: 35,
    top: 60,
    position: "absolute",
  },
  vectorIcon: {
    height: "0.95%",
    width: "3.08%",
    top: "35.78%",
    right: "5.13%",
    bottom: "63.27%",
    left: "91.79%",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.red,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  text: {
    top: 6,
    fontSize: FontSize.size_xl,
    letterSpacing: -1,
    color: Color.colorWhite,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 10,
  },
  ellipseParent: {
    left: 294,
    top: 60,
  },
  groupInner: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorLinen,
    width: 35,
  },
  vectorIcon1: {
    height: "42.86%",
    width: "42.86%",
    top: "28.57%",
    right: "28.57%",
    bottom: "28.57%",
    left: "28.57%",
  },
  rectangleGroup: {
    left: 340,
    top: 60,
  },
  rectangleView: {
    top: 51,
    backgroundColor: Color.colorDarkslategray,
    width: 138,
    height: 44,
    left: 15,
    position: "absolute",
  },
  text1: {
    top: 136,
  },
  text2: {
    top: 298,
  },
  frameItem: {
    top: 296,
    left: 354,
    width: 20,
    height: 20,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  image7Icon: {
    left: 4,
    width: 31,
    height: 32,
  },
  frameInner: {
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
    borderWidth: 2,
    borderColor: Color.red,
    borderStyle: "solid",
    left: 15,
  },
  text3: {
    left: 38,
    top: 189,
    color: Color.colorBlack,
    letterSpacing: -1.7,
    fontSize: FontSize.size_16xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text4: {
    left: 42,
    top: 229,
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild1: {
    left: 197,
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
  },
  text5: {
    left: 224,
    top: 229,
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  text6: {
    left: 27,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
    top: 60,
  },
  text7: {
    top: 20,
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleContainer: {
    left: 106,
    top: 169,
  },
  frameChild2: {
    left: 288,
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
  },
  frameChild3: {
    left: 379,
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
  },
  text8: {
    letterSpacing: -0.6,
    fontSize: FontSize.size_xs,
    textTransform: "lowercase",
    color: Color.colorWhite,
    top: 229,
  },
  text9: {
    color: Color.colorBlack,
    letterSpacing: -1.7,
    fontSize: FontSize.size_16xl,
    textTransform: "capitalize",
    top: 189,
  },
  text10: {
    top: 209,
    left: 407,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text11: {
    left: 220,
    top: 189,
    color: Color.colorBlack,
    letterSpacing: -1.7,
    fontSize: FontSize.size_16xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  groupChild2: {
    borderWidth: 3,
    borderColor: Color.red,
    borderStyle: "solid",
    backgroundColor: Color.colorTomato_200,
  },
  text12: {
    marginTop: 16.5,
    marginLeft: -77.3,
    top: "50%",
    left: "50%",
    textShadowRadius: 15,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "#040404",
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  groupView: {
    top: 331,
    left: 15,
  },
  groupChild4: {
    backgroundColor: Color.colorTomato_300,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  text13: {
    left: 9,
  },
  rectangleParent1: {
    top: 545,
    left: 15,
  },
  text14: {
    textShadowColor: "#110000",
  },
  rectangleParent2: {
    top: 438,
    left: 15,
  },
  text15: {
    left: 9,
  },
  rectangleParent3: {
    top: 652,
    left: 15,
  },
  text16: {
    textShadowColor: "#040404",
    height: 16,
    width: 157,
    top: 66,
  },
  rectangleParent4: {
    top: 331,
  },
  text17: {
    left: 9,
  },
  rectangleParent5: {
    top: 545,
  },
  text18: {
    left: 9,
  },
  rectangleParent6: {
    top: 438,
  },
  text19: {
    left: 10,
    textShadowColor: "rgba(4, 4, 4, 0.8)",
  },
  rectangleParent7: {
    top: 652,
  },
  image6Icon: {
    left: 82,
    width: 21,
    height: 21,
  },
  groupChild17: {
    left: 0,
    top: 0,
  },
  text20: {
    top: 14,
    fontStyle: "italic",
    left: 9,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    color: Color.colorWhite,
    textTransform: "capitalize",
    position: "absolute",
  },
  vectorParent: {
    top: 319,
    left: 172,
  },
  image8Icon: {
    top: 250,
    left: 13,
    width: 15,
    height: 15,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
  },
});

export default Frame1;
