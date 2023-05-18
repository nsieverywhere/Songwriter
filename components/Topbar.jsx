import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

const Topbar = (props) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.hamburger} name="bars" />
      <Text style={styles.heading}>{props.heading}</Text>

      <TouchableOpacity style={styles.pressable}>
        <Ionicons style={styles.sleep} name="ios-moon" />
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 100,
    width: 34,
    height: 34,
    backgroundColor: "white",
    position: "absolute",
    right: 20,
    top: 20,
  },
  hamburger: {
    color: "white",
    fontSize: 26,
    position: "absolute",
    left: 20,
    top: 20,
  },
  sleep: {
    color: "black",
    fontSize: 26,

    textAlign: "center",
  },
  container: {
    height: 70,
    backgroundColor: "#091426",
  },
  heading: {
    color: "white",
    margin: "auto",
    fontSize: 20,
  },
});
