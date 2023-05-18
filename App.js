import { NavigationContainer } from "@react-navigation/native";
import { TouchableWithoutFeedback, Text, View, Keyboard } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      >
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
