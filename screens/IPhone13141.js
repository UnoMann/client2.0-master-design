import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone13141 = () => {
  return (
    <View style={styles.iphone13143}>
      <Image
        style={[styles.iphone13143Child, styles.iphone13143Position]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <LinearGradient
        style={[styles.iphone13143Item, styles.iphone13143Position]}
        locations={[0, 1]}
        colors={["#f9f1e6", "rgba(249, 241, 230, 0.15)"]}
      />
      <Text style={[styles.text, styles.textFlexBox]}>Администрация</Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text1, styles.textTypo2]}>инн</Text>
        <Text style={[styles.text2, styles.textTypo1]}>1234567890</Text>
      </View>
      <View style={[styles.bxmapParent, styles.parentPosition]}>
        <Image
          style={styles.bxmapIcon}
          contentFit="cover"
          source={require("../assets/bxmap.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <Text style={[styles.text3, styles.textTypo1]}>
          пр. Ленина, 38, Магнитогорск, Челябинская обл., 455000
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.group, styles.groupLayout1]}>
          <Text style={styles.text4}>Новая заявка</Text>
          <Image
            style={[styles.ictwotonePlusIcon, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/ictwotoneplus.png")}
          />
        </View>
      </View>
      <View style={[styles.ellipseParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={[styles.text5, styles.textTypo3]}>😎</Text>
      </View>
      <Text style={[styles.text6, styles.textFlexBox]}>заявки</Text>
      <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>администрация</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-23.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>администрация</Text>
      </View>
      <View style={[styles.frameView, styles.rectangleParentLayout]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>администрация</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>администрация</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-24.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>администрация</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.text7, styles.textTypo3]}>администрация</Text>
      </View>
      <Text style={[styles.text13, styles.textTypo2]}>журнал работ</Text>
      <View style={styles.groupPosition}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.text14, styles.textTypo]}>{`Клиентов клиент 
клиенович `}</Text>
        <View style={[styles.ellipseGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text15, styles.textTypo]}>к</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13143Position: {
    width: 390,
    top: 73,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  parentPosition: {
    borderLeftWidth: 2,
    borderColor: Color.red,
    borderStyle: "solid",
    left: 13,
    position: "absolute",
  },
  textTypo2: {
    color: Color.red,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.6,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  frameItemLayout: {
    height: 40,
    width: 360,
  },
  frameLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupLayout1: {
    height: 24,
    position: "absolute",
  },
  groupLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  groupPosition: {
    height: 111,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    textTransform: "capitalize",
    position: "absolute",
  },
  iphone13143Child: {
    height: 247,
  },
  iphone13143Item: {
    height: 248,
    backgroundColor: "transparent",
  },
  text: {
    top: 282,
    fontSize: FontSize.size_13xl,
    letterSpacing: -1.6,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    left: 15,
    textTransform: "capitalize",
  },
  text1: {
    top: 2,
    left: 3,
    textTransform: "uppercase",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text2: {
    left: 40,
    textTransform: "lowercase",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  parent: {
    top: 409,
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
    right: 2,
    width: 15,
    height: 15,
    top: 0,
    position: "absolute",
  },
  text3: {
    right: 23,
    color: Color.colorGray_100,
    width: 298,
  },
  bxmapParent: {
    top: 355,
    width: 362,
    height: 34,
  },
  frameItem: {
    backgroundColor: Color.red,
    height: 40,
    width: 360,
    top: 0,
    left: 0,
  },
  text4: {
    top: 4,
    left: 24,
    color: Color.colorLinen,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  ictwotonePlusIcon: {
    width: 24,
    top: 0,
    left: 0,
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
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  text5: {
    marginTop: -12.5,
    marginLeft: -12.5,
    fontSize: FontSize.size_6xl,
    letterSpacing: -1.2,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    textTransform: "capitalize",
  },
  ellipseParent: {
    top: 285,
    left: 340,
  },
  text6: {
    top: 455,
    fontSize: FontSize.size_mini,
    textTransform: "lowercase",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    left: 15,
  },
  frameInner: {
    marginTop: -14,
    left: 5,
    width: 40,
    height: 29,
    top: "50%",
  },
  text7: {
    marginTop: -8,
    left: 85,
    fontSize: FontSize.size_smi,
    top: "50%",
    letterSpacing: -0.6,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    textTransform: "capitalize",
    position: "absolute",
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
  text13: {
    marginLeft: -38,
    top: 743,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    left: "50%",
    textTransform: "lowercase",
  },
  groupItem: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.red,
  },
  text14: {
    left: 60,
    top: 51,
    fontSize: FontSize.size_mini,
    letterSpacing: -0.7,
  },
  text15: {
    marginTop: -11.5,
    marginLeft: -7.5,
    fontSize: FontSize.size_xl,
    letterSpacing: -1,
    left: "50%",
    top: "50%",
  },
  ellipseGroup: {
    top: 51,
    left: 15,
  },
  iphone13143: {
    backgroundColor: Color.colorLinen,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13141;
