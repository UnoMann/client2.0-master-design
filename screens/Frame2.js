import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildPosition]} />
      <Image
        style={styles.frameItem}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.frameInner, styles.frameInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>А</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.rectangleView, styles.frameInnerLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.frameChild1} />
      <Text style={[styles.text1, styles.textTypo5]}>Мастера</Text>
      <Text style={[styles.text2, styles.textTypo5]}>объекты</Text>
      <View style={[styles.frameChild2, styles.frameChildBorder]} />
      <Image
        style={[styles.image7Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View style={[styles.frameChild3, styles.groupChildLayout]} />
      <Text style={[styles.text3, styles.textTypo3]}>Иван</Text>
      <View style={[styles.frameChild4, styles.groupChildLayout]} />
      <Text style={[styles.text4, styles.textTypo3]}>Иван</Text>
      <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.text5, styles.textTypo3]}>петя</Text>
      </View>
      <View style={[styles.frameChild5, styles.groupChildLayout]} />
      <View style={[styles.frameChild6, styles.groupChildLayout]} />
      <Text style={[styles.text6, styles.textTypo3]}>Иван</Text>
      <Text style={[styles.text7, styles.textTypo3]}>Иван</Text>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={styles.text8}>Администрация</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild1, styles.groupParentLayout]} />
        <Text style={[styles.text9, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-112.png")}
        />
        <View style={styles.groupLayout} />
        <Text style={[styles.text10, styles.textTypo1]}>Частник</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild1, styles.groupParentLayout]} />
        <Text style={[styles.text11, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-113.png")}
        />
        <View style={styles.groupLayout} />
        <Text style={[styles.text12, styles.textTypo1]}>Мост</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild1, styles.groupParentLayout]} />
        <Text style={[styles.text13, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild1, styles.groupParentLayout]} />
        <Text style={[styles.text14, styles.textTypo]}>Администрация</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
        <Image
          style={[styles.groupItem, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={[styles.groupChild1, styles.groupParentLayout]} />
        <Text style={[styles.text15, styles.textTypo]}>Администрация</Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.groupChild14, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.text16, styles.textTypo2]}>1</Text>
      </View>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <View style={[styles.frameChild7, styles.frameChildPosition]} />
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text17, styles.textClr]}>{`Ахмед Ахмедович 
Ахмедов`}</Text>
        <View style={[styles.frameView, styles.frameViewLayout]}>
          <Image
            style={styles.frameChild8}
            contentFit="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <Text style={[styles.text18, styles.textClr]}>администрация</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.frameViewLayout]}>
          <Image
            style={styles.frameChild8}
            contentFit="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <Text style={[styles.text18, styles.textClr]}>администрация</Text>
        </View>
        <View style={[styles.frameChild10, styles.parentLayout]} />
        <Text style={[styles.text20, styles.textClr]}>😎</Text>
        <Text style={[styles.text21, styles.textTypo5]}>объекты</Text>
        <Text style={[styles.text22, styles.textClr]}>мастер</Text>
        <View style={[styles.rectangleParent8, styles.groupChild15Layout]}>
          <View style={[styles.groupChild15, styles.groupChild15Layout]} />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameInnerLayout: {
    width: 35,
    height: 35,
    top: 60,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo5: {
    color: Color.colorGray_100,
    textTransform: "lowercase",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    position: "absolute",
  },
  frameChildBorder: {
    borderWidth: 2,
    borderColor: Color.red,
    borderStyle: "solid",
  },
  iconPosition: {
    top: 159,
    position: "absolute",
  },
  groupChildLayout: {
    height: 95,
    width: 81,
    position: "absolute",
  },
  textTypo3: {
    letterSpacing: -0.6,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupParentLayout: {
    height: 97,
    width: 177,
    position: "absolute",
  },
  groupLayout: {
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
    top: 66,
    position: "absolute",
  },
  textTypo1: {
    height: 16,
    width: 157,
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
    top: 66,
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
  textTypo2: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.7,
  },
  parentLayout: {
    width: 364,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  frameViewLayout: {
    height: 42,
    width: 317,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    left: 23,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild15Layout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  frameChild: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 111,
    backgroundColor: Color.red,
  },
  frameItem: {
    left: 293,
    width: 32,
    display: "none",
    height: 35,
    top: 60,
    position: "absolute",
  },
  frameInner: {
    left: 294,
  },
  text: {
    left: 304,
    fontSize: FontSize.size_xl,
    letterSpacing: -1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    top: 66,
    textAlign: "left",
    color: Color.colorWhite,
  },
  vectorIcon: {
    height: "0.95%",
    width: "3.08%",
    top: "35.78%",
    right: "5.13%",
    bottom: "63.27%",
    left: "91.79%",
  },
  rectangleView: {
    left: 340,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLinen,
    width: 35,
  },
  vectorIcon1: {
    height: "1.78%",
    width: "3.85%",
    top: "8.29%",
    right: "6.41%",
    bottom: "89.93%",
    left: "89.74%",
  },
  frameChild1: {
    top: 51,
    backgroundColor: Color.colorDarkslategray,
    width: 138,
    height: 44,
    left: 15,
    position: "absolute",
  },
  text1: {
    top: 136,
    left: 15,
  },
  text2: {
    top: 298,
    left: 15,
  },
  frameChild2: {
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
  frameChild3: {
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
    left: 43,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.6,
    textTransform: "lowercase",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    top: 209,
  },
  frameChild4: {
    left: 197,
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
  },
  text4: {
    left: 224,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.6,
    textTransform: "lowercase",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    top: 209,
  },
  groupChild: {
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  text5: {
    top: 40,
    left: 28,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.6,
    textTransform: "lowercase",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleGroup: {
    left: 106,
    top: 169,
  },
  frameChild5: {
    left: 288,
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
  },
  frameChild6: {
    left: 379,
    backgroundColor: Color.colorTomato_100,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 169,
  },
  text6: {
    left: 316,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.6,
    textTransform: "lowercase",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    top: 209,
  },
  text7: {
    left: 407,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.6,
    textTransform: "lowercase",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    top: 209,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  groupInner: {
    borderWidth: 3,
    borderColor: Color.red,
    borderStyle: "solid",
  },
  text8: {
    marginTop: 16.5,
    marginLeft: -77.3,
    textShadowRadius: 15,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "#040404",
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  rectangleContainer: {
    top: 331,
    left: 15,
  },
  groupChild1: {
    backgroundColor: Color.colorTomato_300,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  text9: {
    left: 9,
  },
  groupView: {
    top: 545,
    left: 15,
  },
  text10: {
    textShadowColor: "#110000",
  },
  rectangleParent1: {
    top: 438,
    left: 15,
  },
  text11: {
    left: 9,
  },
  rectangleParent2: {
    top: 652,
    left: 15,
  },
  text12: {
    textShadowColor: "#040404",
    height: 16,
    width: 157,
  },
  rectangleParent3: {
    top: 331,
  },
  text13: {
    left: 9,
  },
  rectangleParent4: {
    top: 545,
  },
  text14: {
    left: 9,
  },
  rectangleParent5: {
    top: 438,
  },
  text15: {
    left: 10,
  },
  rectangleParent6: {
    top: 652,
  },
  image6Icon: {
    left: 82,
    width: 21,
    height: 21,
  },
  groupChild14: {
    left: 0,
    top: 0,
  },
  text16: {
    top: 14,
    fontStyle: "italic",
    left: 9,
    letterSpacing: -0.7,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.colorWhite,
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
  frameChild7: {
    backgroundColor: "rgba(4, 4, 4, 0.1)",
    height: 844,
    width: 390,
  },
  text17: {
    top: 108,
    fontSize: FontSize.size_6xl,
    lineHeight: 24,
    left: 23,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textTransform: "capitalize",
  },
  frameChild8: {
    marginTop: -14,
    left: 5,
    width: 40,
    height: 29,
    top: "50%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  text18: {
    marginTop: -8,
    left: 85,
    fontSize: FontSize.size_smi,
    top: "50%",
    letterSpacing: -0.6,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    color: Color.colorBlack,
  },
  frameView: {
    top: 245,
  },
  rectangleParent7: {
    top: 204,
  },
  frameChild10: {
    height: 55,
    backgroundColor: Color.red,
    left: 0,
    top: 0,
  },
  text20: {
    top: 20,
    fontSize: FontSize.size_54xl,
    letterSpacing: -3.6,
    left: 23,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  text21: {
    top: 176,
    left: 23,
    letterSpacing: -0.7,
  },
  text22: {
    top: 445,
    left: 292,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
  },
  groupChild15: {
    right: 0,
    borderWidth: 1,
    borderColor: Color.red,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 0,
    width: 22,
  },
  vectorIcon2: {
    top: 7,
    right: 7,
    width: 9,
    height: 9,
    position: "absolute",
  },
  rectangleParent8: {
    top: 440,
    right: 319,
  },
  parent: {
    marginTop: -236,
    marginLeft: -182,
    height: 472,
    left: "50%",
    width: 364,
    top: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorLinen,
  },
});

export default Frame2;
