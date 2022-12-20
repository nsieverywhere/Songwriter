import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./Search";
import Settings from "./Settings";
import Homepage from "./Homepage";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Searchscreen() {
  return <Search />;
}

function Settingsscreen() {
  return <Settings />;
}

function Homescreen() {
  return <Homepage />;
}

function Tapescreen() {}

function Metronomescreen() {}

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: "1rem",
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#091426",
          position: "absolute",
          elevation: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,

          height: 90,
          paddingBottom: 9,
          color: "white",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#c2c2c2",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cassette" color={color} size={size} />
          ),
        }}
        name="Tape"
        component={Tapescreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Home"
        component={Homescreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
        name="Search"
        component={Searchscreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="metronome"
              color={color}
              size={size}
            />
          ),
        }}
        name="Metronome"
        component={Metronomescreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={Settingsscreen}
      />
    </Tab.Navigator>
  );
};

export default Home;
