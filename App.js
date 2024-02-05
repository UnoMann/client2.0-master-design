// import { SafeAreaView, StatusBar } from "react-native";
// import AppNavigation from "./navigation/navigation";
// import { widthPercentageToDP } from "react-native-responsive-screen";




// export default function App() {
//   return (
//     <SafeAreaView className="w-full h-full" >

//           <AppNavigation/>
//       </SafeAreaView>
//   );
// }

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import IPhone1314 from "./screens/IPhone1314";
import IPhone13141 from "./screens/IPhone13141";
import IPhone13142 from "./screens/IPhone13142";
import IPhone13143 from "./components/IPhone13143";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Frame/>
      {/* <Frame1/> */}
      {/* <Frame2/> */}
      {/* <Frame3/> */}
      {/* <IPhone1314/> */}
      {/* <IPhone13141/> */}
      {/* <IPhone13142/> */}
      {/* <IPhone13143/> */}
    </NavigationContainer>
  );
};
