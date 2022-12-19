import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import Songpage from "./Songpage";

function Homescreen() {
  <Home />;
}

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Songpage" component={Songpage} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
