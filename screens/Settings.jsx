import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Topbar from "../components/Topbar";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View>
        <Topbar heading="Settings" />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
