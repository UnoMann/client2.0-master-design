import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13143 = () => {
  return (
    <View style={styles.iphone13142}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.text, styles.textTypo4]}>{`Клиентов клиент 
клиенович `}</Text>
        <View style={[styles.ellipseParent, styles.groupItemLayout]}>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text1, styles.text1Position]}>к</Text>
        </View>
      </View>
      <View style={styles.iphone13142Child} />
      <Text style={[styles.text2, styles.textTypo3]}>Мои объекты</Text>
      <Text style={[styles.text3, styles.textTypo3]}>о компании</Text>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <Image
          style={styles.groupInnerLayout}
          contentFit="cover"
          source={require("../assets/rectangle-114.png")}
        />
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        <Text style={styles.textTypo2}>Мост</Text>
      </View>
      <View style={[styles.iphone13142Item, styles.iphone13142Layout]} />
      <View style={[styles.iphone13142Inner, styles.iphone13142Layout]} />
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <Image
          style={styles.groupInnerLayout}
          contentFit="cover"
          source={require("../assets/rectangle-114.png")}
        />
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        <Text style={styles.textTypo2}>Мост</Text>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Text style={styles.text6}>
        <Text
          style={styles.text7}
        >{`          Компания «Монтаж охранно-пожарной сигнализации» с `}</Text>
        <Text style={styles.textTypo1}>2006 года</Text>
        <Text
          style={styles.text7}
        >{` успешно занимается проектированием, монтажом, пуско-наладкой, техническим и сервисным обслуживанием:
автоматических систем охранно-пожарной сигнализации,
автоматических установок пожаротушения,
систем оповещения при пожаре.`}</Text>
      </Text>
      <Text style={styles.text10}>😎</Text>
      <View style={[styles.frameView, styles.frameLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={styles.parent}>
          <Text style={styles.text11}>Связаться с нами</Text>
          <Image
            style={[styles.vectorIcon, styles.text1Position]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
      </View>
      <Text style={[styles.text12, styles.textTypo]}>⏱️</Text>
      <Text style={[styles.text13, styles.textTypo]}>💪</Text>
      <Text style={[styles.text14, styles.textTypo]}>📍</Text>
      <Text style={[styles.text15, styles.textPosition]}>
        {" "}
        Кратчайшие сроки
      </Text>
      <Text style={[styles.text16, styles.textPosition]}>
        <Text style={styles.textTypo1}>{`  `}</Text>
        <Text style={styles.text7}>Разработка</Text>
        <Text style={styles.textTypo1}> рабочих проектов</Text>
      </Text>
      <Text style={[styles.text20, styles.textPosition]}>
        <Text style={styles.textTypo1}>{`  г. Северодвинск `}</Text>
        <Text style={styles.text7}>и</Text>
        <Text style={styles.textTypo1}> Архангельская обл.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo4: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  groupItemLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  text1Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo3: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textTransform: "lowercase",
    left: 15,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleLayout: {
    height: 171,
    width: 360,
    top: 169,
    position: "absolute",
  },
  groupInnerLayout: {
    borderRadius: 10,
    height: 171,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13142Layout: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: Color.red,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: -1.6,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    left: 15,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  textPosition: {
    left: 46,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.red,
    height: 111,
    left: 0,
    top: 0,
    position: "absolute",
    width: 390,
  },
  text: {
    left: 60,
    letterSpacing: -0.7,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    top: 51,
    position: "absolute",
  },
  groupItem: {
    width: 35,
    left: 0,
    top: 0,
  },
  text1: {
    marginTop: -11.5,
    marginLeft: -7.5,
    fontSize: FontSize.size_xl,
    letterSpacing: -1,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  ellipseParent: {
    left: 15,
    top: 51,
    width: 35,
  },
  rectangleParent: {
    height: 111,
    left: 0,
    top: 0,
    position: "absolute",
    width: 390,
  },
  iphone13142Child: {
    top: 408,
    backgroundColor: Color.colorDarkslategray,
    width: 207,
    height: 66,
    left: 15,
    position: "absolute",
  },
  text2: {
    top: 136,
  },
  text3: {
    top: 375,
  },
  rectangleView: {
    backgroundColor: Color.colorTomato_200,
  },
  textTypo2: {
    textShadowRadius: 30.57,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "#040404",
    height: 28,
    width: 320,
    letterSpacing: -1.2,
    fontSize: FontSize.size_5xl,
    left: 18,
    top: 116,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  rectangleGroup: {
    left: 15,
  },
  iphone13142Item: {
    top: 8,
    left: 228,
  },
  iphone13142Inner: {
    top: 135,
    left: 355,
  },
  rectangleContainer: {
    left: 385,
  },
  groupIcon: {
    top: 144,
    left: 360,
    width: 11,
    height: 3,
    position: "absolute",
  },
  text7: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textTypo1: {
    fontStyle: "italic",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text6: {
    top: 508,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    width: 360,
    left: 15,
    textAlign: "left",
    position: "absolute",
  },
  text10: {
    top: 492,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    left: 15,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    height: 40,
    backgroundColor: Color.red,
    left: 0,
    top: 0,
  },
  text11: {
    left: 19,
    color: Color.colorLinen,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: -0.7,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -6.5,
    marginLeft: -67,
    width: 14,
    height: 14,
  },
  parent: {
    top: 12,
    left: 113,
    width: 134,
    height: 17,
    position: "absolute",
  },
  frameView: {
    top: 784,
    left: 15,
  },
  text12: {
    top: 654,
  },
  text13: {
    top: 696,
  },
  text14: {
    top: 738,
  },
  text15: {
    top: 666,
    fontStyle: "italic",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text16: {
    top: 712,
  },
  text20: {
    top: 751,
  },
  iphone13142: {
    backgroundColor: Color.colorLinen,
    height: 844,
    overflow: "hidden",
    width: 390,
  },
});

export default IPhone13143;
