import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Songpage from "./screens/Songpage";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>{/* <StatusBar style="auto" /> */}</View>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Home}
          screenOptions={{
            headerShown: true,
            tabBarStyle: {
              backgroundColor: "#8d6a29",
              position: "absolute",
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              borderRadius: 15,
              height: 90,
              paddingBottom: 9,
              color: "white",
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Songpage" component={Songpage} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
